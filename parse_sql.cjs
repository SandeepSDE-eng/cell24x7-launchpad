const fs = require('fs');
const path = require('path');

const sql = fs.readFileSync(path.join(__dirname, 'enquiries.sql'), 'utf8');

const insertRegex = /INSERT INTO `enquiries` \(`id`, `name`, `email`, `mobile`, `created_at`, `updated_at`, `remarks`, `company_name`, `country_code`, `service_type`[\s\S]*?\);/g;

function parseValue(val) {
  if (val === 'NULL' || val === null) return null;
  if (val.startsWith("'") && val.endsWith("'")) {
    let unquoted = val.slice(1, -1);
    unquoted = unquoted.replace(/\\'/g, "'").replace(/\\\\/g, "\\");
    return unquoted;
  }
  if (!isNaN(val)) return Number(val);
  return val;
}

function cleanServiceType(raw) {
  if (!raw) return "";
  let clean = raw.trim();
  
  // Unescape backslashes multiple times if needed
  clean = clean.replace(/\\"/g, '"').replace(/^"+|"+$/g, '');
  
  if (clean.startsWith('[') && clean.endsWith(']')) {
    try {
      const arr = JSON.parse(clean);
      if (Array.isArray(arr)) return arr.join(', ');
    } catch (e) {
      // Manual extraction if JSON.parse fails
      const matches = clean.match(/"([^"]+)"/g);
      if (matches) {
        return matches.map(m => m.replace(/"/g, '')).join(', ');
      }
    }
  }
  return clean;
}

const records = [];

let match;
while ((match = insertRegex.exec(sql)) !== null) {
  const sqlText = match[0];
  const valuesStart = sqlText.indexOf('VALUES');
  if (valuesStart === -1) continue;
  const tuplesStr = sqlText.slice(valuesStart + 6).replace(/;\s*$/, '');
  
  let i = 0;
  while (i < tuplesStr.length) {
    if (tuplesStr[i] === '(') {
      i++;
      let start = i;
      let inString = false;
      let escape = false;
      let fields = [];
      
      while (i < tuplesStr.length) {
        let char = tuplesStr[i];
        if (escape) {
          escape = false;
        } else if (char === '\\') {
          escape = true;
        } else if (char === "'" && !escape) {
          inString = !inString;
        } else if (char === ',' && !inString) {
          fields.push(tuplesStr.slice(start, i).trim());
          start = i + 1;
        } else if (char === ')' && !inString) {
          fields.push(tuplesStr.slice(start, i).trim());
          i++;
          break;
        }
        i++;
      }
      
      if (fields.length === 10) {
        const rawService = parseValue(fields[9]);
        records.push({
          id: parseValue(fields[0]),
          name: parseValue(fields[1]) || "N/A",
          email: parseValue(fields[2]) || "N/A",
          mobile: parseValue(fields[3]) || "N/A",
          created_at: parseValue(fields[4]) || new Date().toISOString(),
          updated_at: parseValue(fields[5]) || new Date().toISOString(),
          remarks: parseValue(fields[6]) || "",
          company_name: parseValue(fields[7]) || "",
          country_code: parseValue(fields[8]) || "",
          service_type: cleanServiceType(rawService),
        });
      }
    } else {
      i++;
    }
  }
}

// Sort records descending by created_at or id so latest enquiries appear at top
records.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime() || b.id - a.id);

console.log('Total parsed records:', records.length);
if (records.length > 0) {
  console.log('Sample record 0:', JSON.stringify(records[0], null, 2));
  console.log('Sample record 1:', JSON.stringify(records[1], null, 2));
}

const outputDir = path.join(__dirname, 'src', 'data');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}
fs.writeFileSync(path.join(outputDir, 'initialEnquiries.json'), JSON.stringify(records, null, 2));
console.log('Successfully written cleaned JSON to src/data/initialEnquiries.json');

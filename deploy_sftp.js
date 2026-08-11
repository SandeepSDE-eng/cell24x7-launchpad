import Client from "ssh2-sftp-client";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sftp = new Client();

const config = {
  host: "154.210.160.233",
  port: 2232,
  username: "adm.Cell24X7",
  password: "SM8En#M9ZXvKhQBk",
};

async function main() {
  try {
    console.log("==========================================");
    console.log("Starting SFTP upload...");
    console.log("==========================================");

    console.log("Connecting to server via SFTP...");
    await sftp.connect(config);
    console.log("Connected successfully!");

    const remoteDir = "/home/adm.Cell24X7/cmt-react/cmtmedia/dist";
    const localDir = path.join(__dirname, "dist");

    console.log(`Checking remote directory: ${remoteDir}`);
    const exists = await sftp.exists(remoteDir);
    if (exists) {
      console.log("Remote directory exists. Cleaning remote directory contents...");
      // List contents
      const fileList = await sftp.list(remoteDir);
      for (const file of fileList) {
        const filePath = `${remoteDir}/${file.name}`;
        if (file.type === "d") {
          console.log(`Deleting remote directory: ${filePath}`);
          await sftp.rmdir(filePath, true);
        } else {
          console.log(`Deleting remote file: ${filePath}`);
          await sftp.delete(filePath);
        }
      }
    } else {
      console.log("Remote directory does not exist. Creating...");
      await sftp.mkdir(remoteDir, true);
    }

    console.log(`Uploading files from local "${localDir}" to remote "${remoteDir}"...`);
    await sftp.uploadDir(localDir, remoteDir);
    console.log("Upload completed successfully!");

    console.log("Setting remote directory permissions to 755 recursively...");
    await new Promise((resolve, reject) => {
      sftp.client.exec(`chmod -R 755 ${remoteDir}`, (err, stream) => {
        if (err) return reject(err);
        stream.on("close", (code) => {
          if (code === 0) resolve();
          else reject(new Error(`chmod exited with code ${code}`));
        }).on("data", (data) => {
          console.log(data.toString().trim());
        }).stderr.on("data", (data) => {
          console.error(data.toString().trim());
        });
      });
    });
    console.log("Permissions set to 755 successfully!");

  } catch (err) {
    console.error("[ERROR] SFTP Deployment failed:", err.message);
    process.exit(1);
  } finally {
    await sftp.end();
    console.log("SFTP connection closed.");
  }
}

main();

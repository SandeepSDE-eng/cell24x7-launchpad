import { Client } from "ssh2";

const conn = new Client();

const config = {
  host: "154.210.160.233",
  port: 2232,
  username: "adm.Cell24X7",
  password: "SM8En#M9ZXvKhQBk",
};

const cmd = process.argv[2] || "ls -la && pm2 status";

conn.on("ready", () => {
  console.log("Client :: ready");
  conn.exec(cmd, (err, stream) => {
    if (err) throw err;
    stream.on("close", (code, signal) => {
      console.log("Stream :: close :: code: " + code + ", signal: " + signal);
      conn.end();
    }).on("data", (data) => {
      console.log("STDOUT: " + data);
    }).stderr.on("data", (data) => {
      console.log("STDERR: " + data);
    });
  });
}).connect(config);

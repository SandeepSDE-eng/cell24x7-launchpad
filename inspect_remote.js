import Client from "ssh2-sftp-client";

const sftp = new Client();

const config = {
  host: "154.210.160.233",
  port: 2232,
  username: "adm.Cell24X7",
  password: "A9#kLm2!Qx7@Rp",
};

async function main() {
  try {
    console.log("Connecting...");
    await sftp.connect(config);
    console.log("Connected!");

    console.log("Listing /home/adm.Cell24X7/cmt-react contents:");
    let list = await sftp.list("/home/adm.Cell24X7/cmt-react");
    console.log(JSON.stringify(list, null, 2));

    console.log("Checking if /home/adm.Cell24X7/cmt-react/cmtmedia exists:");
    const hasCmtMedia = await sftp.exists("/home/adm.Cell24X7/cmt-react/cmtmedia");
    console.log("cmtmedia exists:", hasCmtMedia);

    console.log("Listing /home/adm.Cell24X7/cmt-react/cmtmedia/dist contents:");
    let distList = await sftp.list("/home/adm.Cell24X7/cmt-react/cmtmedia/dist");
    console.log(JSON.stringify(distList, null, 2));


  } catch (err) {
    console.error("Error:", err.message);
  } finally {
    await sftp.end();
  }
}

main();

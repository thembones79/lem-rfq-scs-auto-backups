const fs = require("fs");
const { spsave } = require("spsave");
const { coreOptions, creds } = require("./secrets");

exports.saveSharepoint = async (file) => {
  const project = file.substring(0, file.length - 15);
  const year = file.substring(file.length - 14, file.length - 10);
  const month = file.substring(file.length - 10, file.length - 8);
  const fileOptions = {
    folder: `Shared Documents/backups/${project}/${year}/${month}`,
    fileName: `${file}.zip`,
    fileContent: fs.readFileSync(`${file}.zip`),
  };
  try {
    const ss = await spsave(coreOptions, creds, fileOptions);
    console.log({ ss });
    return file;
  } catch (error) {
    console.error(error);
  }
};

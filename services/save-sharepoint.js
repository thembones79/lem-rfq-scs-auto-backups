const fs = require("fs");
const { spsave } = require("spsave");
const { coreOptions, creds } = require("./secrets");

exports.saveSharepoint = async (project, file) => {
  const fileOptions = {
    folder: `Shared Documents/backups/${project}`,
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

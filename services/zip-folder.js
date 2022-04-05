const AdmZip = require("adm-zip");

exports.zipFolder = async (folder) => {
  const file = new AdmZip();
  try {
    file.addLocalFolder(`./${folder}`, folder);
    file.writeZip(`${folder}.zip`);
  } catch (error) {
    console.log(error);
  }
  return folder;
};

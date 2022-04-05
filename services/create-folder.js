const fs = require("fs");

exports.createFolder = async (folderName) => {
  try {
    if (!fs.existsSync(folderName)) {
      fs.mkdirSync(folderName);
    }
    return folderName;
  } catch (err) {
    console.error(err);
  }
};

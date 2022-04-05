const fs = require("fs");

exports.deleteZipFile = async (file) => {
  try {
    fs.unlinkSync(`./${file}.zip`);
    return file;
  } catch (err) {
    console.error(err);
  }
};

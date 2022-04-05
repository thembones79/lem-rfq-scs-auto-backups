const fs = require("fs");

exports.deleteDir = async (dir) => {
  try {
    fs.rmdirSync(dir, { recursive: true });
    console.log(`${dir} is deleted!`);
    return dir;
  } catch (err) {
    console.error(`Error while deleting ${dir}.`);
  }
};

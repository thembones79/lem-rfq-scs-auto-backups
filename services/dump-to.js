const { exec } = require("child_process");
const { command } = require("./secrets");

exports.dumpTo = async (folder) => {
  const project = folder.substring(0, folder.length - 15);
  return new Promise((resolve, reject) => {
    exec(
      `cd "${folder}" &&
      ${command[project]} &&
      cd .. `,
      { maxBuffer: 1024 * 1500 },
      (error, stdout, stderr) => {
        if (error) {
          console.error(`error: ${error.message}`);
          resolve(`${folder}`);
        }
        if (stderr) {
          console.warn(`stderr: ${stderr}`);
          resolve(`${folder}`);
        }
        console.log(`stdout: ${stdout}`);
        resolve(`${folder}`);
      }
    );
  });
};

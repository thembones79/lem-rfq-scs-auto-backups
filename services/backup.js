const { generateNameFor } = require("./generate-name-for");
const { createFolder } = require("./create-folder");
const { dumpTo } = require("./dump-to");
const { zipFolder } = require("./zip-folder");
const { deleteDir } = require("./delete-dir");
const { saveSharepoint } = require("./save-sharepoint");
const { deleteZipFile } = require("./delete-zip-file");

exports.backup = async (project) => {
  const folderName = generateNameFor(project);
  const folder = await createFolder(folderName);
  const dump = await dumpTo(folder);
  const zip = await zipFolder(dump);
  await deleteDir(zip);
  const file = await saveSharepoint(project, zip);
  const success = await deleteZipFile(file);
  console.log({ success });
};

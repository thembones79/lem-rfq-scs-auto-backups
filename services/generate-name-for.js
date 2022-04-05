exports.generateNameFor = (project) => {
  const d = new Date();
  const timestamp =
    d.toISOString().substring(0, 10).split("-").join("") +
    d.toLocaleTimeString().split(":").join("");
  return `${project}-${timestamp}`;
};

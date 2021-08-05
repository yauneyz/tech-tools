const Tool = require('../models/ToolModel');

exports.getTools = (async (_req, res) => {
  const tools = await Tool.find();
  res.send(tools);
});

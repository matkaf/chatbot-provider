const Service = require('../services/index');

const getOldestFive = async (_req, res) => {
  const { found, message } = await Service.getOldestFive();

  if (!found) return res.status(400).json(message);

  return res.status(200).json(message);
};

module.exports = {
  getOldestFive,
};

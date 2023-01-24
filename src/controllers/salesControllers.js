const salesService = require('../services/salesService');

const getAllSales = async (_req, res) => {
  const products = await salesService.getAllSales();
  return res.status(200).json(products);
};
const getSalesById = async (req, res) => {
  const { id } = req.params;
  const { type, message, data } = await salesService.getSalesById(id);
  if (type) res.status(type).json({ message });
  return res.status(200).json(data);
};

module.exports = {
  getAllSales,
  getSalesById,
 
};
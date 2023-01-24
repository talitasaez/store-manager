const salesService = require('../services/salesService');

const getAllSales = async (_req, res) => {
  const { type, message } = await salesService.getAllSales();
  if (type) return res.status(404).json({ message: 'getAllSales: erro ' });
  return res.status(200).json(message);
};
const getSalesById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await salesService.getSalesById(id);
  if (type) return res.status(404).json({ message: 'Sale not found' });
  return res.status(200).json(message);
};

module.exports = {
  getAllSales,
  getSalesById,
 
};
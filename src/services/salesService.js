const salesModel = require('../models/salesModel');

const getAllSales = async () => {
  const sale = await salesModel.getAllSales();
  return sale;
};

const getSalesById = async (id) => {
  const sale = await salesModel.getSalesById(id);
  if (!sale[0]) return { type: 404, message: 'Sale not found' };
  return { type: null, message: sale };
};

module.exports = {
  getAllSales,
  getSalesById,
};
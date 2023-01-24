const salesModel = require('../models/salesModel');

const getAllSales = async () => {
  const products = await salesModel.getAllSales();
  return products;
};

const getSalesById = async (id) => {
  const product = await salesModel.getSalesById(id);
  if (!product) return { type: 404, message: 'Product not found' };
  return { data: product };
};

module.exports = {
  getAllSales,
  getSalesById,
};
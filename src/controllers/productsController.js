const productsService = require('../services/productsService');

const getAllProducts = async (_req, res) => {
  const products = await productsService.getAllProducts();
  return res.status(200).json(products);
};
const getProductsById = async (req, res) => {
  const { id } = req.params;
  const { type, message, data } = await productsService.getProductsById(id);
  if (type) res.status(type).json({ message });
  return res.status(200).json(data);
};

  module.exports = {
    getAllProducts,
    getProductsById,
  };
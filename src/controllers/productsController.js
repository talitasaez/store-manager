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

const registerProduct = async (req, res) => {
  const { name } = req.body;
  const { type, message } = await productsService.registerProduct(name);
  if (type) return res.status(422).json({ message });
  return res.status(201).json(message);
};

  module.exports = {
    getAllProducts,
    getProductsById,
    registerProduct,
  };
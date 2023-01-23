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
  const product = await productsService.registerProduct(name);
  return res.status(201).json(product);
};
const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const { type, message } = await productsService.updateProduct(id, name);
  if (type) return res.status(404).json({ message });
  return res.status(200).json(message);
};
const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsService.deleteProduct(id);
  if (type) return res.status(404).json({ message });
  return res.status(204).json(message);
};

const searchProduct = async (req, res) => {
  const { q } = req.query;
  const { message } = await productsService.searchProduct(q);
  return res.status(200).json(message);
};

  module.exports = {
    getAllProducts,
    getProductsById,
    registerProduct,
    updateProduct,
    deleteProduct,
    searchProduct,
  };
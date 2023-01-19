const productsModel = require('../models/productsModel');
// const productsController = require('../controllers/productsController');

const getAllProducts = async () => {
  const products = await productsModel.getAllProducts();
  return products;
};

const getProductsById = async (id) => {
  const product = await productsModel.getProductsById(id);
  if (!product) return { type: 404, message: 'Product not found' };
  return { data: product };
};

const registerProduct = async (name) => {
  const insert = await productsModel.registerProduct({ name });
  const idResult = await productsModel.getProductsById(insert);
  return { type: 201, content: idResult };
};

module.exports = {
  getAllProducts,
  getProductsById,
  registerProduct,
};
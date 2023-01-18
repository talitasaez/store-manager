const productsModel = require('./models/productsModel');

const getAllProducts = async () => {
  const products = await productsModel.getAllProducts();
  return products;
};

const getProductsById = async (id) => {
  const product = await productsModel.getProductsById(id);
  if (!product) return { type: 404, message: 'Product not found' };
  return { type: null, data: place };
};

module.exports = {
  getAllProducts,
  getProductsById,
};
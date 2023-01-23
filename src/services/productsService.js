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
  const newId = await productsModel.registerProduct(name);
  const newProduct = await productsModel.getProductsById(newId);

  return newProduct;
};
const updateProduct = async (id, name) => {
  await productsModel.updateProduct(id, name);
  const newProduct = await productsModel.getProductsById(id);
  if (!newProduct) return { type: 404, message: 'Product not found' };

  return { type: null, message: newProduct };
};

const deleteProduct = async (id) => {
  const newProduct = await productsModel.getProductsById(id);
  if (!newProduct) return { type: 404, message: 'Product not found' };

  const productDelete = await productsModel.deleteProduct(id);

  return productDelete;
};

module.exports = {
  getAllProducts,
  getProductsById,
  registerProduct,
 updateProduct,
 deleteProduct,
};
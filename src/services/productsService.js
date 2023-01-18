const productsModel = require('./models/productsModel');

const getAllProducts = async (req, res) => {
  const products = await productsModel.getAllProducts();
  return products;
};

// const getProductsById = async (id) => {

// };

module.exports = {
  getAllProducts,
  // getProductsById,
};
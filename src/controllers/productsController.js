const productsService = require('./models/productsService');

const getAllProducts = async () => {
  const products = productsService.getAllProducts();
  return res.status(200).json(products);
};
// const getProductsById = async (id) => {

// };

  module.exports = {
    getAllProducts,
    // getProductsById,
  };
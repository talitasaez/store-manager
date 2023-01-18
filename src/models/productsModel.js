const connection = require('./connection');

const getAllProducts = async (req, res) => {
  const [result] = await connection.execute('SELECT * FROM products');
  return result;
};

// const getProductsById = async (id) => {

// };

module.exports = {
  getAllProducts,
  // getProductsById,
};
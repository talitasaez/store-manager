const connection = require('./connection');

const getAllProducts = async () => {
  const [result] = await connection.execute('SELECT * FROM products');
  return result;
};

// const getProductsById = async (id) => {

// };

module.exports = {
  getAllProducts,
  // getProductsById,
};
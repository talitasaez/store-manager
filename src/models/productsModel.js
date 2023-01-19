const connection = require('./connection');

const getAllProducts = async () => {
  const [result] = await connection.execute('SELECT * FROM products');
  return result;
};

const getProductsById = async (id) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?', [id],
  );
  return result;
};

const registerProduct = async (id) => {
  const [[result]] = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUES (?)', [id],
  );
  return result;
};

module.exports = {
  getAllProducts,
  getProductsById,
  registerProduct,
};
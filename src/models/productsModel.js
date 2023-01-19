const connection = require('./connection');

const getAllProducts = async () => {
  const [[result]] = await connection.execute('SELECT * FROM products');
  return result;
};

const getProductsById = async (id) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?', [id],
  );
  return result;
};

const registerProduct = async (name) => {
  const query = 'INSERT INTO StoreManager.products (name) VALUES(?)';
  const [result] = await connection.execute(query, [name]);
  return result.insertId;
};

module.exports = {
  getAllProducts,
  getProductsById,
  registerProduct,
};
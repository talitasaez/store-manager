const connection = require('./connection');

const getAllProducts = async () => {
  const [result] = await connection.execute('SELECT * FROM StoreManager.products');
  return result;
};

const getProductsById = async (id) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?', [id],
  );
  return result;
};

const registerProduct = async (productName) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUE (?)',
    [productName],
  );

  return insertId;
};
const updateProduct = async (id, name) => {
  const query = `UPDATE StoreManager.products SET name = '${name}' WHERE id = ${id}`;
  const result = await connection.execute(query);

  return result;
};
const deleteProduct = async (id) => {
  const query = 'DELETE FROM StoreManager.products WHERE id = ?';
  const result = await connection.execute(query, [id]);

  return result;
};

module.exports = {
  getAllProducts,
  getProductsById,
  registerProduct,
  updateProduct,
  deleteProduct,
};
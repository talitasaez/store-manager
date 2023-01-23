const productsMock = [
  {
    "id": 1,
    "name": "Martelo de Thor"
  },
  {
    "id": 2,
    "name": "Traje de encolhimento"
  },
  {
    "id": 3,
    "name": "Escudo do Capitão América"
  }
];

const productMockOne = {
  id: 1,
  name: 'Martelo de Thor',
};

const productMockNotFound = { message: 'Product not found' };

module.exports = {
  productsMock,
  productMockOne,
  productMockNotFound,

};
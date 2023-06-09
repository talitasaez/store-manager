const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const productsModel = require('../../../src/models/productsModel');
const productsService = require('../../../src/services/productsService');
const productsMock = require('../mocks/productsMock.test');

const { expect } = chai;
chai.use(sinonChai); 


describe('Service de produtos ', function () {
  describe('Listar todos os produtos service', function () {

    // beforeEach(() => {
    //   sinon.stub(connection, 'execute').resolves([productsMock]);
    // });

    it('listar todos produtos', async function () {
      sinon.stub(productsModel, 'getAllProducts').resolves(productsMock);

      const result = await productsService.getAllProducts();

      expect(result).to.be.deep.equal(productsMock);
    });

    it('Deve retornar produto por id ', async function () {
      sinon.stub(productsModel, 'getProductsById').resolves(undefined);

      const result = await productsService.getProductsById(1);

      expect(result.message).to.be.deep.equal('Product not found');
    });

  
    it('Pegar Id existente, retornar o produto', async function () {
      sinon.stub(productsModel, 'getProductsById').resolves(productsMock);
      const id = 1;

      const result = await productsService.getProductsById(id);

      expect(result.data).to.be.deep.equal(productsMock)
    });
  });


});
  
describe('Testar função de DELETE', function () {
  afterEach(function () {
    sinon.restore();
  });
  const newProduct = { name: 'Meteoro de Pégasus' };
  const id = 4;
  it('Retornar o type/status 404 se o id não existir ', async function () {
    sinon.stub(productsModel, 'getProductsById').resolves(true);
    sinon.stub(productsModel, 'deleteProduct').resolves(id);

    const result = await productsService.deleteProduct(id);

    expect(result).to.be.deep.equal(id);
  });
});

afterEach(() => {
  sinon.restore();
});

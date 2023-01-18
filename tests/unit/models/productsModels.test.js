const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const productsModel = require('../../../src/models/productsModel');
const connection = require('../../../src/models/connection');
const productsMock = require('../mocks/productsMock.test');

const { expect } = chai;
chai.use(sinonChai);


describe('Model de produtos', function () {
  describe('Listar todos os produtos model ', function () {

    // beforeEach(() => {
    //   sinon.stub(connection, 'execute').resolves([productsMock]);
    // });

    it('Deve retornar um array com todos os elementos', async function () {
      sinon.stub(connection, 'execute').resolves([productsMock]);

      const result = await productsModel.getAllProducts();

      expect(result).to.be.equal(productsMock);
    });

    it('Deve retornar produto por id ', async function () {
      sinon.stub(connection, 'execute').resolves([[productsMock[0]]]);

      const result = await productsModel.getProductsById(1);

      expect(result).to.be.deep.equal(productsMock[0]);
    });
    afterEach(() => {
      sinon.restore();
   })

  })

});
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const productsController = require('../../../src/controllers/productsController');
// const { getAllProducts } = require('../../../src/models/productsModel');
const productsService = require('../../../src/services/productsService');
const productsMock = require('../mocks/productsMock.test');

const { expect } = chai;
chai.use(sinonChai);


describe('Controller de produtos', function () {
  describe('Listar todos os produtos controller', function () {

    // const req = {}
    // const res = {}

    // beforeEach(() => {
    //   res.status = sinon.stub().returns(res);
    //   res.json = sinon.stub().returns();
    // });

    it('Caso se lista todos os produtos', async function () {
      const res = {}
      const req = {}
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(productsService, 'getAllProducts')
        .resolves({ message: productsMock });

      await productsController.getAllProducts(req, res);

      expect(res.status).to.have.been.calledOnceWith(200);
      // expect(res.json).to.have.been.calledWithExactly({});
    });

    it('Deve retornar produto por id ', async function () {
      const res = {}
      const req = {}
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
      req.params = { id: 1 }; 
      sinon.stub(productsService, 'getProductsById')
      .resolves(productsMock);

    await productsController.getProductsById(req, res);

    expect(res.status).to.have.been.calledWith(200);
      // expect(res.json).to.have.been.calledWith(productsMock[0]);
    });
    afterEach(() => {
      sinon.restore();
    })

  })

});
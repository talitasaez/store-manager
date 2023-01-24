const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const salesController = require('../../../src/controllers/salesControllers');
const salesModel = require('../../../src/models/salesModel');
const salesService = require('../../../src/services/salesService');
const salesMock = require('../mocks/salesMock.test');
const listSalesIdMock = require('../mocks/listSalesIdMock.test');
const connection = require('../../../src/models/connection');

const { expect } = chai;
chai.use(sinonChai);


describe('Controller de Sales', function () {
  describe('Listar todos os sale controller', function () {

    it('Caso se lista todos os sales', async function () {
      const res = {}
      const req = {}
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(salesService, 'getAllSales')
        .resolves({ type: null, message: salesMock });

      await salesController.getAllSales(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(salesMock);
      
    });


    afterEach(() => {
      sinon.restore();
    })

  })

});
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



describe('Testes de unidade do model de sales', function () {
  it('Recuperando a lista de sales', async function () {

    it('Recuperando a lista de sales', async function () {
      sinon.stub(connection, 'execute').resolves([salesMock]);

      const result = await salesModel.getAllSales();
      expect(result).to.be.deep.equal(salesMock);
    });

    it('Recuperando um sale pelo id', async function () {
      sinon.stub(connection, 'execute').resolves([listSalesIdMock]);

      const result = await salesModel.getSalesById(1);

      expect(result).to.be.deep.equal(listSalesIdMock);
    })


    afterEach(() => {
      sinon.restore();
    })

  })

});
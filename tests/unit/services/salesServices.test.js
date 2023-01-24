const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const salesModel = require('../../../src/models/salesModel');
const salesService = require('../../../src/services/salesService');
const salesMock = require('../mocks/salesMock.test');
const connection = require('../../../src/models/connection');
const listSalesIdMock = require('../mocks/listSalesIdMock.test');

const { expect } = chai;
chai.use(sinonChai);


describe('Service de sales', function () {
  describe('Listar todos os sales service', function () {

  
    it('listar todos sales', async function () {
      sinon.stub(salesModel, 'getAllSales').resolves(salesMock);

      const result = await salesService.getAllSales();

      expect(result).to.be.deep.equal(salesMock);
    });

  });


});


afterEach(() => {
  sinon.restore();
});

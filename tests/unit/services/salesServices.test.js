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

    // it('Deve retornar produto por id ', async function () {
    //   sinon.stub(salesModel, 'getSalesById').resolves(undefined);

    //   const result = await salesService.getSalesById(5);

    //   expect(result.message).to.be.deep.equal('Sale not found');
    // });


    // it('Pegar Id existente, retornar o sales', async function () {
    //   sinon.stub(salesModel, 'getSalesById').resolves(listSalesIdMock);

    //   const result = await salesService.getSalesById(1);

    //   expect(result.message).to.be.deep.equal(listSalesIdMock)
    //   // expect(result.type).to.equal(null);
    // });
  });


});


afterEach(() => {
  sinon.restore();
});

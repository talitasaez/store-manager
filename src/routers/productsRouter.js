const express = require('express');
const productsController = require('../controllers/productsController');
const validateName = require('../middlewares/validate/validateName');

const router = express.Router();

router.get('/search?', productsController.searchProduct);
router.get('/', productsController.getAllProducts);
router.get('/:id', productsController.getProductsById);
router.post('/', validateName, productsController.registerProduct);
router.put('/:id', validateName, productsController.updateProduct);
router.delete('/:id', productsController.deleteProduct);

module.exports = router;
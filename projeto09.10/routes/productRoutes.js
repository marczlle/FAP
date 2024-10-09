const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController')

router.post('/produtos', productController.createProduct)
router.get('/produtos', productController.getProduct)

module.exports = router;
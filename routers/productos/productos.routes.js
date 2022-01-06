const express = require('express');
const {
  getAllProductsController, 
  getProductByIdController,
  addProductController, 
  updateProductByIdController,
  deleteProductByIdController
} = require('../../controllers/productos.controllers');

const router = express.Router();

router.get('/', getAllProductsController);

router.get('/:idProducto', getProductByIdController);

router.post('/', addProductController);

router.put('/:idProducto', updateProductByIdController);

router.delete('/:idProducto', deleteProductByIdController);

module.exports = router;
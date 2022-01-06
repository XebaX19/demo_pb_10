const { del } = require('express/lib/application');
const { ProductosApi } = require('../models/index');

const productos = new ProductosApi();

const getAllProductsController = (req, res) => {
  const { precioMaximo, busqueda } = req.query;
  let respuestaProductos = productos.listarTodos();
  if (Object.keys(req.query).length) {
    if (precioMaximo) {
      if (isNaN(+precioMaximo)) {
        return res.status(400).send('precioMaximo must be a valid number');
      }
      respuestaProductos = respuestaProductos.filter(product => product.precio <= +maxPrice);
    }
    if (busqueda) {
      respuestaProductos = respuestaProductos.filter(product => product.nombre.toLowerCase().startsWith(busqueda.toLowerCase()))
    }
  }
    return res.json(respuestaProductos);
};

const getProductByIdController = (req, res) => {
  const { idProducto } = req.params;
  const product = productos.listarPorId(idProducto);
  if (product.error) return res.status(404).send(product.error);
  return res.json(product);
};

const addProductController = (req, res) => {
  const newProduct = productos.guardar(req.body);
  if (newProduct.error) return res.status(400).send(newProduct.error);
  return res.json(newProduct);
};

const updateProductByIdController = (req, res) => {
  const { params: { idProducto } } = req;
  const updatedProduct = productos.actualizar(req.body, idProducto);
  if (updatedProduct.error) return res.status(404).send(updatedProduct.error);
  return res.json(updatedProduct);
};

const deleteProductByIdController = (req, res) => {
  const { idProducto } = req.params;
  const deletedProduct = products.deleteById(idProducto);
  if (deletedProduct.error) return res.status(404).send(deletedProduct.error);
  return res.json(deletedProduct);
};

module.exports = {
  getAllProductsController,
  getProductByIdController,
  addProductController,
  updateProductByIdController,
  deleteProductByIdController,
};
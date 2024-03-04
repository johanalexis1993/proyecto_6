const {
  getProducts,
  postProducts,
  updateProducts,
  deleteProducts,
  nameProduct,
  getProductsByPrice
} = require('../controllers/cuadro.js')
const cuadroRouters = require('express').Router()
cuadroRouters.get('/:precio', getProductsByPrice)
cuadroRouters.get('/nombre/:nombre', nameProduct)
cuadroRouters.get('/', getProducts)
cuadroRouters.post('/', postProducts)
cuadroRouters.put('/:id', updateProducts)
cuadroRouters.delete('/:id', deleteProducts)

module.exports = cuadroRouters

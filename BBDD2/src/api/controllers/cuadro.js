const Cuadro = require('../models/cuadro.js')
const postProducts = async (req, res, next) => {
  try {
    const newProduct = new Cuadro(req.body)
    const productSave = await newProduct.save()
    return res.status(201).json(productSave)
  } catch (error) {
    console.error('Ha fallado la petición:', error)
    return res.status(400).json({ error: 'Ha fallado la petición' })
  }
}
const getProducts = async (req, res, next) => {
  try {
    const allProducts = await Cuadro.find()
    return res.status(200).json(allProducts)
  } catch (error) {
    console.error('Ha fallado la petición:', error)
    return res.status(400).json({ error: 'Ha fallado la petición' })
  }
}
const updateProducts = async (req, res, next) => {
  try {
    const { id } = req.params
    /*const newCuadro = new Cuadro(req.body)
    newCuadro._id = id*/
    const updatedProduct = await Cuadro.findByIdAndUpdate(id, req.body, {
      new: true
    })
    if (!updatedProduct) {
      return res.status(404).json({ error: 'Producto no encontrado' })
    }
    return res.status(200).json(updatedProduct)
  } catch (error) {
    console.error('Ha fallado la petición:', error)
    return res.status(400).json({ error: 'Ha fallado la petición' })
  }
}
const deleteProducts = async (req, res, next) => {
  try {
    const { id } = req.params
    const productDeleted = await Cuadro.findByIdAndDelete(id)
    if (!productDeleted) {
      return res.status(404).json({ error: 'Producto no encontrado' })
    }
    return res.status(200).json(productDeleted)
  } catch (error) {
    console.error('Ha fallado la petición:', error)
    return res.status(400).json({ error: 'Ha fallado la petición' })
  }
}
const nameProduct = async (req, res) => {
  try {
    const { nombre } = req.params
    const producto = await Cuadro.findOne({ product: nombre })
    if (!producto) {
      return res.status(404).json({ error: 'Producto no encontrado' })
    }
    return res.status(200).json(producto)
  } catch (error) {
    console.error('Ha fallado la petición:', error)
    return res.status(500).json({ error: 'Error interno del servidor' })
  }
}
const getProductsByPrice = async (req, res, next) => {
  try {
    const { precio } = req.params
    const product = await Cuadro.find({ price: { $lte: precio } })
    return res.status(200).json(product)
  } catch (error) {
    console.error('Ha fallado la petición:', error)
    return res.status(400).json({ error: 'Ha fallado la petición' })
  }
}

module.exports = {
  getProducts,
  postProducts,
  updateProducts,
  deleteProducts,
  nameProduct,
  getProductsByPrice
}

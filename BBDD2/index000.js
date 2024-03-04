/*require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const connectBD = async () => {
  try {
    await mongoose.connect(process.env.DB_URL)
    console.log('conectado a la BBDD💪')
  } catch (error) {
    console.error('Error conectando con la BBDD👊', error)
  }
}
const productsSchema = new mongoose.Schema(
  {
    imgUrl: {
      type: String
    },
    product: {
      type: String,
      required: true
    },
    amount: {
      type: Number,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    supplier: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
    collection: 'productos'
  }
)
const Cuadro = mongoose.model('productos', productsSchema, 'productos')
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
const cuadroRouters = require('express').Router()
cuadroRouters.get('/nombre/:nombre', nameProduct)
cuadroRouters.get('/', getProducts)
cuadroRouters.post('/', postProducts)
cuadroRouters.put('/:id', updateProducts)
cuadroRouters.delete('/:id', deleteProducts)
const app = express()
connectBD()
app.use(express.json())
app.use(cors())
app.use('/productos', cuadroRouters)
app.use('*', (req, res, next) =>
  res.status(404).json({ error: 'Ruta no encontrada' })
)
app.listen(3000, () => {
  console.log('http://localhost:3000')
})*/

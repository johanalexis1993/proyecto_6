const mongoose = require('mongoose')
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
module.exports = Cuadro

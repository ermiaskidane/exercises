'use strict'

const express = require('express')
require('dotenv').config()
const cors = require('cors')
const axios = require('axios')
const mongoose = require('mongoose')
const app = express()
const PORT = process.env.PORT

app.use(cors())
app.use(express.json())

// lets connect our node app to mongodb
mongoose.set('strictQuery', false)
mongoose.connect('mongodb://localhost:27017/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  family: 4,
})

// Collection: Schema and model
// Schema: determine the shape of our data || blueprint or template for our collections
const productSchema = new mongoose.Schema({
  name: String,
  brand: String,
  price: Number,
  imageUrl: String,
  description: String,
})

// Schema: drawing phase
// Model: creation phase
const productModel = mongoose.model('products', productSchema)

function seedProductCollection() {
  const makeupApi = 'https://makeup-api.herokuapp.com/api/v1/products.json'

  const pencile = new productModel({
    name: 'Lippie Pencil',
    brand: 'colourpop',
    price: 5.0,
    imageUrl:
      'https://cdn.shopify.com/s/files/1/1338/0845/collections/lippie-pencil_grande.jpg?v=1512588769',
    description:
      'Many of our Lippie Stix have a coordinating Lippie Pencil designed to compliment it perfectly, but feel free to mix and match',
  })
  const blottedLip = new productModel({
    name: 'Blotted Lip',
    brand: 'colourpop',
    price: 5.5,
    imageUrl:
      'https://cdn.shopify.com/s/files/1/1338/0845/products/brain-freeze_a_800x1200.jpg?v=1502255076',
    description:
      'Blotted Lip Sheer matte lipstick that creates the perfect popsicle pout! Formula is lightweight, matte and buildable for light to medium coverage.',
  })
  const lippieStix = new productModel({
    name: 'Lippie Stix',
    brand: 'colourpop',
    price: 5.5,
    imageUrl:
      'https://cdn.shopify.com/s/files/1/1338/0845/collections/blottedlip-lippie-stix_grande.jpg?v=1512588803',
    description:
      'Lippie Stix Formula contains Vitamin E, Mango, Avocado, and Shea butter for added comfort and moisture.',
  })
  const noFilterFoundation = new productModel({
    name: 'No Filter Foundation',
    brand: 'colourpop',
    price: 12.0,
    imageUrl:
      'https://cdn.shopify.com/s/files/1/1338/0845/products/foundations-lineup_800x1200.jpg?v=1528927785',
    description:
      'Developed for the Selfie Age, our buildable full coverage, natural matte foundation delivers flawless looking skin from day-to-night.',
  })
  pencile.save()
  blottedLip.save()
  lippieStix.save()
  noFilterFoundation.save()
}
// seedProductCollection()
app.get('/', (req, res) => {
  res.status(200).send('home route')
})

app.get('/products', async (req, res) => {
  let productData = await productModel.find({})
  res.send(productData)
})

app.post('/products', async (req, res) => {
  const { name, brand, price, imageUrl, description } = req.body

  let newProduct = await productModel.create({
    name,
    brand,
    price,
    imageUrl,
    description,
  })
  // res.send(newProduct)
  productModel.find({}, (err, allProducts) => {
    if (err) {
      res.send(`error in getting the products ${err}`)
    } else {
      res.send(allProducts)
    }
  })
})

app.put('/products/:id', async (req, res) => {
  const product = await productModel.findById(req.params.id)
  if (product) {
    ;(product.name = req.body.name),
      (product.brand = req.body.brand),
      (product.price = req.body.price),
      (product.imageUrl = req.body.imageUrl),
      (product.description = req.body.description)

    await product.save()
    const allProduct = await productModel.find({})
    res.json(allProduct)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

app.delete('/products/:id', async (req, res) => {
  const product = await productModel.findById(req.params.id)
  if (product) {
    await product.remove()
    const allProduct = await productModel.find({})
    res.json(allProduct)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

app.get('/productsapi', async (req, res) => {
  const url = 'https://jsonplaceholder.typicode.com/users'
  try {
    const response = await axios.get(url)
    res.status(200).json(response.data)
  } catch {
    res.status(500).send('something went wrong')
  }
})

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`)
})

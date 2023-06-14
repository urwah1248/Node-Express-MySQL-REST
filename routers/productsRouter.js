const { getProducts, addProduct, deleteProduct, updateProduct } = require("../controller/products")
const productsRouter = require('express').Router()

//Routes and their functions
productsRouter.get('/products', getProducts)
productsRouter.post('/products', addProduct)
productsRouter.delete('/products/:id', deleteProduct)
productsRouter.put('/products/:id', updateProduct)

module.exports = productsRouter;
const express = require("express")
const productsRouter = require("./routers/productsRouter")
const middleware = require("./utils/middleware")
const app = express()
const { connectDatabase } = require("./db")

//Connecting to SQL Database
connectDatabase();

//Middleware
app.use(express.json())
app.use(middleware.requestLogger)

//API routes and routers
app.use('/api', productsRouter)

//Unknown Endpoint handler middleware
app.use(middleware.unknownEndpoint)

module.exports = app

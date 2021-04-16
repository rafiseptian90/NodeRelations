const express = require('express')
const app = express()
const Router = express.Router()

Router.get('/', (req, res) => {
    return res.send({ message: 'Hello World !' })
})

// Category endpoint
const CategoryController = require('../app/controllers/CategoryController')
Router.get('/category', CategoryController.index)
Router.get('/category/:id', CategoryController.show)

// Post endpoint
const PostController = require('../app/controllers/PostController')
Router.get('/post', PostController.index)
Router.get('/post/:id', PostController.show)

module.exports = Router
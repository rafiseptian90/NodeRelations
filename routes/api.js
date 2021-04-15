const express = require('express')
const app = express()
const Router = express.Router()

Router.get('/', (req, res) => {
    return res.send({ message: 'Hello World !' })
})

// Posts endpoint
const PostController = require('../app/controllers/PostController')
Router.get('/posts', PostController.index)

// User endpoint
const UserController = require('../app/controllers/UserController')
Router.get('/show/:id', UserController.show)

module.exports = Router
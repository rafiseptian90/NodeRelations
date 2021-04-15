const express = require('express')
const app = express()
const Router = express.Router()

Router.get('/', (req, res) => {
    return res.send({ message: 'Hello World !' })
})

// Auth endpoint
const AuthController = require('../app/controllers/AuthController')
Router.post('/register', AuthController.register)
Router.get('/user/:id', AuthController.profile)

// Profile endpoint
const ProfileController = require('../app/controllers/ProfileController')
Router.get('/profile/:id', ProfileController.show)

module.exports = Router
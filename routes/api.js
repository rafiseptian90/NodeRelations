const express = require('express')
const app = express()
const Router = express.Router()

Router.get('/', (req, res) => {
    return res.send({ message: 'Hello World !' })
})

module.exports = Router
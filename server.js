// register dotenv
if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

// register express
const express = require('express')
const app = express()

// register body-parser
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extends: true }))

// register mongoose
const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(() => {
    console.log('Connected to MongoDB Cloud')

    // call seeder, and start command npm run dev twice
    const DatabaseSeeder = require('./database/seeder/DatabaseSeeder')
    // DatabaseSeeder.seeds()
})
.catch((err) => {
    console.log(err)
})

// register route
const apiEndpoints = require('./routes/api')
app.use('/', apiEndpoints)

// listen server
app.listen(process.env.PORT || 8080)
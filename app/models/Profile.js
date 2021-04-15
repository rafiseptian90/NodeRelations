const mongoose = require('mongoose')
const ProfileSchema =  new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ['M', 'F']
    },
    address: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }

}, {
    timestamps: true
})

module.exports = mongoose.model('Profile', ProfileSchema)
const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },

    email: {
        type: String,
        unique: true,
        required: true
    },

    password: String,

    profile: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Profile'
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('User', UserSchema)
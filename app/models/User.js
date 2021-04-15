const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        unique: true,
        required: true,
    },
    email:{
        type: String,
        unique: true,
        required: true,
    },
    password: String,
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }]
}, {
    timestamps: true
})

module.exports = mongoose.model('User', UserSchema)
const mongoose = require('mongoose')
const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post'
        }
    ]
}, {
    timestamps: true
})

module.exports = mongoose.model('Category', CategorySchema)
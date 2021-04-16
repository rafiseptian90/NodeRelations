const mongoose = require('mongoose')
const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: String,
    categories: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category'
        }
    ]
}, {
    timestamps: true
})

module.exports = mongoose.model('Post', PostSchema)
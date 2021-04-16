const Category = require('../models/Category')

exports.index = async (req, res) => {
    const categories = await Category.find().populate('posts', '-__v -categories').exec()

    return res.send(categories)
}

exports.show = async (req, res) => {
    const category = await Category.findById(req.params.id).populate('posts', '-__v -categories').exec()

    return res.send(category)
}
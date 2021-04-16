const Post = require('../models/Post')

exports.index = async (req, res) => {
    const posts = await Post.find()
                            .select('-__v')
                            .populate('categories', '-__v -posts')
                            .exec()

    return res.send(posts)
}

exports.show = async (req, res) => {
    const post = await Post.findById(req.params.id)
                            .select('-__v')
                            .populate('categories', '-__v -posts')
                            .exec()

    return res.send(post)
}
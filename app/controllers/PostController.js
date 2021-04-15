const Post = require('../models/Post')

exports.index = async (req, res) => {
    const posts = await Post.find()
                            .select('-__v')
                            .populate('user', '-__v -posts -password')
                            .exec()

    return res.send(posts)
}
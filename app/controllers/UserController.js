const User = require('../models/User')

exports.show = async (req, res) => {
    const user = await User.findById(req.params.id).populate('posts', '-__v -user')

    return res.send(user)
}
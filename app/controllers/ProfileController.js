const Profile = require('../models/Profile')

exports.show = async (req, res) => {
    const profile = await Profile.findById(req.params.id)
                                .populate('user', '-__v -password -profile')
                                .select('-__v')
                                .exec()

    return res.send(profile)
}
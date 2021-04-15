const bcrypt = require('bcryptjs')
const User = require('../models/User')
const Profile = require('../models/Profile')

exports.register = (req, res) => {
    const {username, email, password, name, gender, address} = req.body
    const hashPassword = bcrypt.hashSync(password, 10)

    const StoreUser = new User({
                        username,
                        email,
                        password: hashPassword
                    })

    // save new user
    StoreUser.save((err, user) => {
        if(err){
            return res.send({ message: err })
        }

        // create profile too
        new Profile({
            name,
            gender,
            address
        }).save(async (err, profile) => {
            if(err){
                return res.send({ message: err })
            }

            profile.user = user._id
            // save profile again
            await profile.save()

            user.profile = profile._id
            // save user again
            const storeUser = await user.save()

            const response = await User.findById(storeUser._id)
                                        .populate('profile', '-__v -user')
                                        .select('-__v')
                                        .exec()

            return res.send(response)
        })
    })
}

exports.profile = async (req, res) => {
    const user = await User.findById(req.params.id)
                            .populate('profile', '-__v -user')
                            .select('-__v -password')
                            .exec()

    return res.send(user)
}
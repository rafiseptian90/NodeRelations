const User = require('../../app/models/User')
const bcrypt = require('bcryptjs')

exports.seed = async () => {
    const users = usersSeeds()

    const existingUser = await User.find().exec()

    if(existingUser.length < 1){
        users.map(async user => {
            const StoreUser = new User({
                username: user.username,
                email: user.email,
                password: bcrypt.hashSync(user.password, 10)
            })

            await StoreUser.save()
        })
    }
}

function usersSeeds(){
    return [
        {username: 'rshme', email: 'rshme@me.com', password: 'rshme'},
        {username: 'rshme1', email: 'rshme1@me.com', password: 'rshme1'},
        {username: 'rshme2', email: 'rshme2@me.com', password: 'rshme2'},
    ]
}
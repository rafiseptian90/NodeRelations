const UserSeeder = require('./UserSeeder')
const PostSeeder = require('./PostSeeder')

exports.seeds = () => {
    UserSeeder.seed()
    PostSeeder.seed()
}
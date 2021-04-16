const CategorySeeder = require('./CategorySeeder')
const PostSeeder = require('./PostSeeder')

exports.seeds = () => {
    CategorySeeder.seed()
    PostSeeder.seed()
}
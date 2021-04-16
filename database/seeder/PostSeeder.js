const Post = require('../../app/models/Post')
const Category = require('../../app/models/Category')

exports.seed = async () => {
    const categories = await Category.find().exec()

    PostSeeds().map(async post => {
        const StorePost = new Post({
                             title: post.title,
                             content: post.content,
                             categories: categories.map(category => category._id)
                          })

        await StorePost.save()
    })

    const posts = await Post.find().exec()

    categories.map(async category => {
        await Category.findByIdAndUpdate(category._id, { posts: posts.map(post => post._id) }, { new: true }).exec()
    })
}

function PostSeeds() {
    return [
        {
            title: 'eum et est occaecati',
            content: 'ullam et saepe reiciendis voluptatem adipisci\\nsit amet autem assumenda provident rerum culpa\\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\\nquis sunt voluptatem rerum illo velit'
        },
        {
            title: 'nesciunt quas odio',
            content: 'repudiandae veniam quaerat sunt sed\\nalias aut fugiat sit autem sed est\\nvoluptatem omnis possimus esse voluptatibus quis\\nest aut tenetur dolor neque'
        },
        {
            title: 'dolorem eum magni eos aperiam quia',
            content: 'ut aspernatur corporis harum nihil quis provident sequi\\nmollitia nobis aliquid molestiae\\nperspiciatis et ea nemo ab reprehenderit accusantium quas\\nvoluptate dolores velit et doloremque molestiae'
        }
    ]
}
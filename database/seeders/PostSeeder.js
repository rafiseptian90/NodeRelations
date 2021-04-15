const Post = require('../../app/models/Post')
const User = require('../../app/models/User')

exports.seed = async () => {
    const posts = postSeeds()

    const user = await User.findOne({username: 'rshme'}).exec()

    await posts.map(async post => {
        const StorePost = new Post({
            title: post.title,
            body: post.body,
            user: user._id
        })

        await StorePost.save()
    })

    const postIDs = await Post.find({user: user._id}).exec()

    // problem with postIDs by that user is empty at first time running
    if(postIDs.length < 1){
        console.log('Empty')
        return
    }

    await User.findByIdAndUpdate(user._id, { posts: postIDs.map(post => post._id) }, {new: true}).exec()
}

function postSeeds(){
    return [
        {
            title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",

        },
        {
            title: "qui est esse",
            body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        },
        {
            title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
            body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
        }
    ]
}
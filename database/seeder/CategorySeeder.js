const Category = require('../../app/models/Category')

exports.seed = () => {
    CategorySeeds().map(async category => {
        const StoreCategory = new Category({
                                  name: category.name
                              })

        await StoreCategory.save()
    })
}

function CategorySeeds(){
    return [
        {name: 'Natural'},
        {name: 'Tourism'},
        {name: 'Beach'},
        {name: 'Mountain'},
    ]
}
const Category = require('../../model/category')

const getCategory = async (_ , {type})=>{
    try {
        const categories = await Category.find({status:true, type:type}).sort({_id:-1})
        return categories
    } catch (error) {
      throw error   
    }
}


const deleteCategory = async (_ , {id})=>{
    try {
         await Category.deleteOne({_id:id})
        return "deleted"
    } catch (error) {
      throw error   
        
    }
}

const createCategory = async (_ , {category})=>{
    try {
      
        const cat = new Category({
            name : category.name,
            logo : category.logo,
            type : category.type,
            status: category.status

        })
        await cat.save()
        return cat
    } catch (error) {
      throw error   
        
    }
}

const updateCategory = async (_ , {id, data})=>{
    try {
        const category = await Category.findOne({_id:id})
        category.name = data.name || category.name
        // category.status = data.status || category.status
        category.type = data.type || category.type
        category.logo = data.logo || category.logo
        category.status = data.status === false ?  false :   data.status || category.status

        console.log(category)
        console.log(id)

        await category.save()
        return category
    } catch (error) {
      throw error   
        
    }
}
module.exports = {
    Mutation :{
        createCategory,
        updateCategory
    },
    Query:{
        getCategory,
        deleteCategory
    }
}
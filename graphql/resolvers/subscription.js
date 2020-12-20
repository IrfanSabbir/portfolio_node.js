const SubsCribe = require('../../model/social_url')



const createSubscription = async (_ , {social})=>{
    try {

        const url = new Social({
            thumb: social.thumb,
            url: social.url,
            name: social.name,
        })

        await url.save()
        return url
    } catch (error) {
        throw error
    }
}

const getSubscription = async ()=>{
    try {
        const url = await Social.find()
        return url
    } catch (error) {
        throw error
    }
}


const deleteSubscription = async (_ , {id})=>{
    try {
        const url = await Social.deleteOne({_id:id})
        return "deleted"
    } catch (error) {
        throw error
    }
}

module.exports = {
    Query:{
        deleteSubscription,
        getSubscription
    },
    Mutation:{
        createSubscription
       
    }
}
const Social = require('../../model/social_url')



const createSocial = async (_ , {social})=>{
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

const getSocial = async ()=>{
    try {
        const url = await Social.find()
        return url
    } catch (error) {
        throw error
    }
}


const deleteSocial = async (_ , {id})=>{
    try {
        const url = await Social.deleteOne({_id:id})
        return "deleted"
    } catch (error) {
        throw error
    }
}

module.exports = {
    Query:{
        deleteSocial,
        getSocial
    },
    Mutation:{
        createSocial
       
    }
}
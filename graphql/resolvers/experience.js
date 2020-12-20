const Experience = require('../../model/experience')



const createExperience = async (_ , {experience})=>{
    try {


        const ex = new Experience({
        company: experience.company ,
        logo:  experience.logo,
        title: experience.title ,
        from: experience.from ,
        to: experience.to
        
        })

        await ex.save()
        return ex
    } catch (error) {
        throw error
    }
}

const getExperience = async ()=>{
    try {
        const experiences = await Experience.find()
        return experiences
    } catch (error) {
        throw error
    }
}


const deleteExperience = async (_ , {id})=>{
    try {
        const experiences = await Experience.deleteOne({_id:id})
        return "deleted"
    } catch (error) {
        throw error
    }
}

module.exports = {
    Query:{
        getExperience,
        deleteExperience
    },
    Mutation:{
        createExperience
       
    }
}
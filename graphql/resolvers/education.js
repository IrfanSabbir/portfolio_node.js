const Education = require('../../model/education')



const createEducation = async (_ , {eduaction})=>{
    try {


        const edu = new Education({
        institute: eduaction.institute ,
        logo:  eduaction.logo,
        fields:  eduaction.fields,
        title: eduaction.title ,
        gpa: +eduaction.gpa ,
        from: eduaction.from ,
        to: eduaction.to
        })

        await edu.save()
        return edu
    } catch (error) {
        throw error
    }
}

const getEducations = async ()=>{
    try {
        const educations = await Education.find()
        return educations
    } catch (error) {
        throw error
    }
}


const deleteEducation = async (_ , {id})=>{
    try {
        const educations = await Education.deleteOne({_id:id})
        return "deleted"
    } catch (error) {
        throw error
    }
}

module.exports = {
    Query:{
        getEducations,
        deleteEducation
    },
    Mutation:{
        createEducation
       
    }
}
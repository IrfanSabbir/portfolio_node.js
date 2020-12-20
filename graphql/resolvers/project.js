const Project = require('../../model/project')



const createProject = async (_ , {project})=>{
    try {

        const ex = new Project({
            name:project.name,
            thumb:project.thumb,
            descriptions:project.descriptions,
            images:project.images,
            categories:project.categories,
            demo:project.demo,
            type:project.type,
            login_email:project.login_email,
            login_password:project.login_password,
            hot:project.hot

        })

        await ex.save()
        return ex
    } catch (error) {
        throw error
    }
}

const updateProject = async (_ , {project, id})=>{
    try {
        const pro = await Project.findOne({_id:id})
        
            pro.name = project.name  || pro.name,
            pro.thumb = project.thumb || pro.thumb,
            pro.descriptions = project.descriptions || pro.descriptions,
            pro.images = project.images || pro.images,
            pro.categories = project.categories || pro.categories,
            pro.demo = project.demo || pro.demo,
            pro.type = project.type || pro.type,
            pro.login_email = project.login_email || pro.login_email,
            pro.login_password = project.login_password || pro.login_password,
            pro.hot = project.hot === false ?  false :   project.hot ||pro.hot
            
    
        await pro.save()
        return pro
    } catch (error) {
        throw error
    }
}

const getProject = async (_,{type})=>{
    try {
        const projetcs = await Project.find({type:type}).sort({_id:-1})
        return projetcs
    } catch (error) {
        throw error
    }
}


const deleteProject = async (_ , {id})=>{
    try {
        const projetcs = await Project.deleteOne({_id:id})
        return "deleted"
    } catch (error) {
        throw error
    }
}

module.exports = {
    Query:{
        getProject,
        deleteProject
    },
    Mutation:{
        createProject,
        updateProject
       
    }
}
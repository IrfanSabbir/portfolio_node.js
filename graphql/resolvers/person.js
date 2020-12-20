
const User = require('../../model/user')


const create_Profile = async (_ , {input})=>{
    try {
        
        const person = new User({
            name : input.name,
            email : input.email,
            contact_no : input.contact_no,
            overview : input.overview,
            dob : input.dob,
            title : input.title,
            image : input.image,
            video_intro : input.video_intro
        })
        await person.save()
        return person
    } catch (error) {
        throw error
    }
}

const update_Profile = async (_ ,{input})=>{
    try {
       const user =await User.findOne({status:true})
       if(!user){
           throw new Element("Person not found")
       } 
       user.name = input.name || user.name
       user.email = input.email || user.email
       user.contact_no = input.contact_no || user.contact_no
       user.overview = input.overview || user.overview
       user.dob = input.dob || user.dob
       user.title = input.title || user.title
       user.image = input.image || user.image
       user.video_intro = input.video_intro || user.video_intro

       await user.save()

       return user

    } catch (error) {
        throw error
    }
}

const profile = async (req, args)=>{
    try {
        const person = await User.findOne({status:true})
        // console.log(person)
        return person
    } catch (error) {
        throw error
    }
}

module.exports ={
    Query:{
        profile
    },

    Mutation :{
        create_Profile,
        update_Profile
    }
}
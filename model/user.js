const mongoose = require('mongoose')

const Schema = mongoose.Schema

const personSchema = new Schema ({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    overview:{
        type:String,
        required:true
    },
    dob:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    video_intro:{
        type:String,
        default:null
    },
    contact_no:{
        type:String,
        default:null
    },
    status:{
        type:Boolean,
        default:false
    }
})

module.exports = mongoose.model('User', personSchema)
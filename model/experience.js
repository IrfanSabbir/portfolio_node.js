const mongoose = require('mongoose')

const Schema = mongoose.Schema

const experienceSchema = new Schema ({
    company:{
        type:String,
        required:true
    },
    logo:{
        type:String,
        default:null
    },
    title:{
        type:String,
        default:null
    },
    from :{
        type:String,
        required:true
    },
    to:{
        type:String,
        default:null
    }
})

module.exports = mongoose.model('Experience', experienceSchema)
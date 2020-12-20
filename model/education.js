const mongoose = require('mongoose')

const Schema = mongoose.Schema

const educationSchema = new Schema ({
    institute:{
        type:String,
        required:true
    },
    logo:{
        type:String,
        default:null
    },
    fields:{
        type:String,
        default:null
    },
    title:{
        type:String,
        default:null
    },
    gpa:{
        type:Number,
        required:true
    },
    from :{
        type:String,
        required:true
    },
    to:{
        type:String,
        default:null
    },
})

module.exports = mongoose.model('Education', educationSchema)
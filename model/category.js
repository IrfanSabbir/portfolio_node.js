const mongoose = require('mongoose')

const Schema = mongoose.Schema

const categorySchema = new Schema ({
    name:{
        type:String,
        required:true
    },
    logo:{
        type:String,
        default:null
    },
    status:{
        type:Boolean,
        default:null
    },
    type:{
        type:Number,
        required:true
    }
})

module.exports = mongoose.model('Category', categorySchema)
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const socialSchema = new Schema ({
    name:{
        type:String,
        required:true
    },
    thumb:{
        type:String,
        default:null
    },
    url:{
        type:String,
        default:null
    }
})

module.exports = mongoose.model('Social', socialSchema)
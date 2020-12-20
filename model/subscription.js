const mongoose = require('mongoose')

const Schema = mongoose.Schema

const subscriptionSchema = new Schema ({
    email:{
        type:String,
        required:true
    },
    name:{
        type:String,
        default:null
    },
    phone:{
        type:String,
        default:null
    },
    message:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('Subscription', subscriptionSchema)
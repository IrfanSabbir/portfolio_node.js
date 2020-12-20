const mongoose = require('mongoose')

const Schema = mongoose.Schema

const projectSchema = new Schema ({
    name:{
        type:String,
        required:true
    },
    thumb:{
        type:String,
        default:null
    },
    descriptions:{
        type:String,
        default:null
    },
    images:[{
        type:String,
        default:null
    }],
    categories:[{
        type:String,
        default:null
    }],
    demo:{
        type:String,
        default:null
    },
    type:{
        type:Number,
        require:true
    },
    login_email:{
        type:String,
        default:null
    },
    login_password:{
        type:String,
        default:null
    },
    hot:{
        type:Boolean,
        default:false
    }
})

module.exports = mongoose.model('Project', projectSchema)
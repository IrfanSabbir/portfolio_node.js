const express = require('express')
const router = express.Router()
const Subcription = require('../model/subscription')


router.post('/', async(req, res, next)=>{
    try {
    
        const {name, email, phone, message} = req.body
        const subscribe = new Subcription({
            name, email, phone, message
        })
        await subscribe.save()
        res.status(200).json({
            message:"Thank you, I have recieved your message.",
            status:"I will get back to shortly.",
            error:false
        })
    } catch (error) {
        res.status(400).json({
            message:"Unfortunatly, I didn't recieved your message",
            status:error.message,
            error:true
        })
    }
})
router.get('/', async(req, res, next)=>{
    try {
    
        const quotes = await Subcription.find().sort({_id:-1})
        res.status(200).json({
            quotes,
            error:false
        })
    } catch (error) {
        res.status(400).json({
            error:true,
            quotes:[],
        })
    }
})

router.delete('/:sub_id', async(req, res, next)=>{
    try {
        const id  = req.params.sub_id
         await Subcription.deleteOne({_id:id})

        res.status(200).json({
            error:false
        })
    } catch (error) {
        res.status(400).json({
            error:true
        })
    }
})
module.exports = router
const Quote = require('../../model/quote')



const createQuote = async (_ , {quote})=>{
    try {

        const qte = new Quote({
            quote: quote.quote
        })

        await qte.save()
        return qte
    } catch (error) {
        throw error
    }
}

const getQuote = async ()=>{
    try {
        const qte = await Quote.find()
        return qte
    } catch (error) {
        throw error
    }
}


const deleteQuote = async (_ , {id})=>{
    try {
        const qte = await Quote.deleteOne({_id:id})
        return "deleted"
    } catch (error) {
        throw error
    }
}

module.exports = {
    Query:{
        deleteQuote,
        getQuote
    },
    Mutation:{
        createQuote
       
    }
}
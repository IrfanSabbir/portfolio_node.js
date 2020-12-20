const {gql} = require('apollo-server-express')
module.exports = gql `

    type quote{
        _id:ID!
        quote:String
    }

    input inputQuote{
        quote:String
    }

    type Mutation {
        createQuote (quote : inputQuote! ): quote!

    }

    type Query{
        getQuote :  [quote!]!
        deleteQuote( id:ID!) :String

    }

    
`
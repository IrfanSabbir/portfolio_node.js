const {gql} = require('apollo-server-express')
module.exports = gql `

    type social{
        _id:ID!
        name:String
        thumb:String
        url:String

    }

    input inputSocial{
        name:String
        thumb:String
        url:String
    }

    type Mutation {
        createSocial (social : inputSocial! ): social!

    }

    type Query{
        getSocial :  [social!]!
        deleteSocial( id:ID!) :String

    }

    
`
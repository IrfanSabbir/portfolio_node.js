const {gql} = require('apollo-server-express')
module.exports = gql `

    type subscription{
        _id:ID!
        name:String
        phone_number:String
        message:String
        email:String

    }

    input inputSubscription{
        name:String
        phone_number:String
        message:String
        email:String

    }

    type Mutation {
        createSubscription (subscription : inputSubscription! ): subscription!

    }

    type Query{
        getSubscription :  [subscription!]!
        deleteSubscription( id:ID!) :String

    }

    
`
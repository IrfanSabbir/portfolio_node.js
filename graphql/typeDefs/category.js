const {gql} = require('apollo-server-express')
module.exports = gql `

    type Category{
        _id:ID!
        name:String
        logo:String
        type:Int
    }

    input Cat{
        name:String
        logo:String
        type:Int
        status:Boolean
    }

    type Mutation {
        createCategory (category : Cat! ): Category!
        updateCategory (id :ID! ,data : Cat ): Category!

    }

    type Query{
        getCategory( type:Int!) :  [Category!]!
        deleteCategory( id:ID!) :String

    }

    
`
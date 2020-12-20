const {gql} = require('apollo-server-express')
module.exports = gql `

    type experience{
        _id:ID!
        company:String
        logo:String
        title:String
        from:String
        to:String
      
    }

    input inputExperience{
        company:String
        logo:String
        title:String
        from:String
        to:String
       

    }

    type Mutation {
        createExperience (experience : inputExperience! ): experience!

    }

    type Query{
        getExperience :  [experience!]!
        deleteExperience( id:ID!) :String

    }

    
`
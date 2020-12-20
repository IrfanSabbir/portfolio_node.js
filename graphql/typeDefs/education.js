const {gql} = require('apollo-server-express')
module.exports = gql `

    type education{
        _id:ID!
        institute:String
        logo:String
        fields:String
        title:String
        gpa:String
        from:String
        to:String
    }

    input inputEducation{
        institute:String
        logo:String
        fields:String
        title:String
        gpa:String
        from:String
        to:String
    }

    type Mutation {
        createEducation (eduaction : inputEducation! ): education!

    }

    type Query{
        getEducations :  [education!]!
        deleteEducation( id:ID!) :String

    }

    
`
const {gql} = require('apollo-server-express')
module.exports = gql `

    type project{
        _id:ID!
        name:String
        thumb:String
        descriptions:String
        images:[String]
        categories:[String]
        demo:String
        type:Int
        login_email:String
        login_password:String
        hot:Boolean
    }

    input inputProject{
        name:String
        thumb:String
        descriptions:String
        images:[String]
        categories:[String]
        demo:String
        type:Int
        login_email:String
        login_password:String,
        hot:Boolean
    }

    type Mutation {
        createProject (project : inputProject! ): project!
        updateProject (project : inputProject! , id:ID!):project!

    }

    type Query{
        getProject (type:Int!):  [project!]!
        deleteProject( id:ID!) :String

    }

    
`


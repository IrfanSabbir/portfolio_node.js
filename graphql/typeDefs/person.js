const {gql} = require('apollo-server-express')

module.exports = gql`

    type Profile{
        name : String!
        email : String!
        contact_no : String
        overview : String!
        dob : String
        title : String!
        image : String!
        video_intro : String
    }
    input myInfo {
        name : String
        email : String
        contact_no : String
        overview : String
        dob : String
        title : String
        image : String
        video_intro : String
    }

    type Query{
        profile: Profile!
    }

    type Mutation{
        create_Profile (input : myInfo!) : Profile!
        update_Profile (input : myInfo) : Profile!
    }
` 
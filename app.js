require('dotenv').config()
const path = require('path')
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const { ApolloServer  } = require('apollo-server-express')
const {fileLoader , mergeResolvers , mergeTypes } = require('merge-graphql-schemas')

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({extended:true, limit:"50mb"}))
app.use(bodyParser.json({limit:"5mb"}))


app.use('/uploads', express.static(path.join('uploads')))

const typeDefs = mergeTypes(fileLoader(path.join(__dirname , './graphql/typeDefs')))
const resolvers = mergeResolvers(fileLoader(path.join(__dirname ,'./graphql/resolvers')))

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req, res }) => ({ req, res })
   
})

// const sgMail = require('@sendgrid/mail');
// const nodemailer = require("nodemailer");

// const main = async()=>{
//     try {
//         // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
//         // let testAccount = await nodemailer.createTestAccount();

//         let transporter = nodemailer.createTransport({
//             host: "mail.google.com",
//             port: 587,
//             secure: false, // true for 465, false for other ports
//             auth: {
//               user: 'irfansabbir97@gmail.com', // generated ethereal user
//               pass: 'AVOID12345', // generated ethereal password
//             },
//           });

//           transporter.verify(function(error, success) {
//             if (error) {
//               console.log(error);
//             } else {
//               console.log("Server is ready to take our messages");
//             }
//           });
          
//           let info = await transporter.sendMail({
//             from: 'irfansabbir97@gmail.com', // sender address
//             to: "avoidirfan@gmail.com", // list of receivers
//             subject: "Hello ✔", // Subject line
//             text: "Hello world?", // plain text body
//             html: "<b>Hello world?</b>", // html body
//           });

//           console.log("Message sent: %s", info.messageId);
//           // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        
//           // Preview only available when sending through an Ethereal account
//           console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

//         // const msg = {
//         // to: 'avoidirfan@gmail.com',
//         // from: 'irfansabbir97@gmail.com',
//         // subject: 'Sending with Twilio SendGrid is Fun',
//         // text: 'and easy to do anywhere, even with Node.js',
//         // html: '<strong>and easy to do anywhere, even with Node.js</strong>',
//         // };
//         // const mail = await sgMail.send(msg);
//         // console.log(mail)

        
//     } catch (error) {
//         console.log(error)
//     }
// }

// main()

apolloServer.applyMiddleware({app})


const upload = require('./middleware/file')
const subscribeRoute = require('./router/subscription')
app.post('/upload' , upload.single('file') , async (req, res) =>{
    try {
       
        const file = process.env.BASE_URL+"uploads/"+req.file.filename
        res.json({
            message:"uploaded",
            file,
            error:false
        })
    } catch (error) {
        res.json({
            message : "failed to upload image",
            error:true
        })
    }
})
app.post('/upload_files' , upload.array('files', 20) , async (req, res) =>{
    try {
        let files = req.files.map(file=>{
            return process.env.BASE_URL+"uploads/"+file.filename
        })
       
        res.json({
            message:"uploaded",
            files,
            error:false
        })
    } catch (error) {
        res.json({
            message : "failed to upload image",
            error:true
        })
    }
})
app.use('/subscription',subscribeRoute)


mongoose.connect(process.env.MONGO_ATLAS_DATABASE ,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    ()=>{
    app.listen(process.env.PORT ,()=>{
        console.log(process.env.PORT)
    })
})
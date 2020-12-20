const multer = require('multer')


const fileUpload = multer({
    storage: multer.diskStorage ({
        destination: (req, file, cb)=>{
            cb(null, 'uploads')
        },
        filename : (req, file, cb) =>{
            console.log
            let field_name = file.originalname.split('.')
            let name = field_name[0].replace(/\s/g, '-')
            let  ext = file.mimetype
            ext = ext.split('/')
            cb(null, "irfan-portfolio-" + name+  Date.parse(new Date()) + '.'  + ext[1])
        }
    })
})

module.exports = fileUpload
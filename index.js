const express = require("express")

const app = express()

require("dotenv").config()

const database = require("../server/config/database")

const {cloudinaryConnect} = require("./config/cloudinary")

const fileUpload = require("express-fileupload")

const PORT = process.env.PORT || 4000

database.dbconnect()

app.use(
    fileUpload({
      useTempFiles: true,
      tempFileDir: "/temp/",
    })
  );

app.get('/', (req,res)=>{
    return res.json({
        success:true,
        message:"App started running"
    })

})

app.listen(PORT , ()=>{
    console.log(`Your app is running at port ${PORT}`)
})

cloudinaryConnect();
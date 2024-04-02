
const mongoose = require("mongoose")
require("dotenv").config()

exports.dbconnect = () => {
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{console.log("Successfully Connected to Database")})
    .catch((err)=>{
        console.log("Error in connecting to Database")
        console.log(err)
        process.exit(1)

    })

}
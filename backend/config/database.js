const mongoose= require("mongoose")

require('dotenv').config()

const connectDatabase= async()=>{
    await mongoose.connect
    (process.env.MONGO_URI)
    .then((res)=>{
        console.log("Mongoose connected")
    }).catch((e)=>console.log("error connecting to Mongoose", e))
}
module.exports={connectDatabase}

const express= require("express")
const cors= require("cors")
const { connectDatabase } = require("./config/database")
const taskRoutes= require("./routes/task.route.js")

require('dotenv').config()

const dns= require("node:dns/promises") ;   
dns.setServers(["1.1.1.1", "1.0.0.1"]);   

const app= express()
app.use(cors())
app.use(express.json())

app.get("/api/health", (req, res)=>res.send("Health check passed"))

app.use("/api/tasks", taskRoutes);

connectDatabase().then((res)=>{
    app.listen(process.env.PORT, ()=>console.log(`server running on ${process.env.PORT}`))
}).catch((e)=>console.log("Database not connected", e))




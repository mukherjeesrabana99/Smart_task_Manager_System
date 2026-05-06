const express= require("express")
const cors= require("cors")
const { connectDatabase } = require("./config/database")
const taskRoutes= require("./routes/task.route.js")

const dns= require("node:dns/promises") ;   
dns.setServers(["1.1.1.1", "1.0.0.1"]);   

const app= express()
app.use(cors())
app.use(express.json())

app.use("/api/tasks", taskRoutes);

connectDatabase().then((res)=>{
    app.listen(5000, ()=>console.log("server running on 5000"))
}).catch((e)=>console.log("Database not connected", e))




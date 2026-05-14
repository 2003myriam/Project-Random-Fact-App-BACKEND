const express=require("express")
const app =express()


require("dotenv").config();
const port =process.env.PORT || 5000  


 

const connectDB = require("./src/config/db");

connectDB()
app.use(express.json()) 

 
 
 

app.listen(port,()=>{
  console.log("serveur is running on  port"+port)
})

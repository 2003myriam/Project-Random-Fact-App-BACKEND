const express=require("express")
const app =express()


require("dotenv").config();
const port =process.env.PORT || 5000  

/* __importing Route_____ */
const bookRoute=require("./src/Routes/BookRoutes")
const factRoute=require("./src/Routes/FactRoute")

const connectDB = require("./src/config/db");

connectDB()
app.use(express.json()) 

/* _____using Route ____ */
app.use("/books",bookRoute)
app.use("/citations",factRoute)
 
 
 

app.listen(port,()=>{
  console.log("serveur is running on  port"+port)
})

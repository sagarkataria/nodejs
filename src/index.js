import dotenv from "dotenv";
import connactDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path: "./.env"
})

const port = process.env.PORT || 8000

connactDB()
.then(()=>{
   app.listen(port , (req,res) =>{
     console.log(`Server running at port ${port}`)
   })
})
.catch((err)=>{
    console.log("Mongodb connection failed !!!",err)
})
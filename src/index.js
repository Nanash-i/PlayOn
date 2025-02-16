import dotenv from 'dotenv'
import ConnectDB from "./db/index.js";
import app from './app.js';

dotenv.config(
    {path:"./env"}
)

ConnectDB()
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`App Serving On Port: ${process.env.PORT}`)
    })
})
.catch((err)=>console.log("Connection Error",err))
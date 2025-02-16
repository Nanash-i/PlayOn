import express from 'express'
import cors from "cors"
import cookieParser from "cookie-parser"


const app=express()

app.use(cors({
    origin:process.env.CORS_ORIGIN
}))

app.use(express.json({limit:"16kb"}))//limits the json acceptance
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))//publicaly available files
app.use(cookieParser())//extract the user cookie from their browser


export default app
import mongoose from "mongoose"
import { db_Name } from "../constants.js";

const ConnectDB=async ()=>{
    try {
       const connectionInstance= await mongoose.connect(`${process.env.MONGODB_URL}/${db_Name}`)
       console.log(`MongoDB Connection Established!!! DB Host:${connectionInstance.connection.host}`)
    } catch (error) {
        console.error(error);
        process.exit(1)
    }
}

export default ConnectDB
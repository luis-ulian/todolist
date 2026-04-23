import mongoose from "mongoose";
import dns from "node:dns/promises";

dns.setServers(["1.1.1.1"]);

export const connectDB = async () =>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
    }
    catch(error){
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}


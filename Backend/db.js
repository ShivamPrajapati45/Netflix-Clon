import mongoose from "mongoose";

export const connectDB = async () => {
    try{
        await mongoose.connect(process.env.ONLINE_DB_NAME);
        console.log("Database Connected Successfully");
    }catch(err){
        console.log("Database Connection Error",err);
    }
};
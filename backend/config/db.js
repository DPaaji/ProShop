import mongoose from "mongoose";
import dotenv from "dotenv"
export const connectDB = async () => {

    dotenv.config();
    try {

        mongoose.connect(process.env.MONGODB_URL , {   
            useUnifiedTopology:true,
        });

        console.log('Database Connected...')
    } catch (error) {
        console.log(`Error: ${error.message}`)
    } 
}
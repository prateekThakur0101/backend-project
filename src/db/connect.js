import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log(`MONGODB CONNECTED!! HOST: ${connection.connection.host}`);
  } catch (error) {
    console.error("MongoDb Connection Failed!!", error.message);
    process.exit(1);
  }
};

export default connectDB;
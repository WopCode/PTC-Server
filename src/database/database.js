import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

// mongodb conection
export const mongodb = mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Conecction MONGODB"))
    .catch((error) => console.error(error));

import mongoose from "mongoose";

const Schema = mongoose.Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    state: {
        type: Boolean,
        required: true,
    },
});
export const userSchema = mongoose.model("user", Schema);
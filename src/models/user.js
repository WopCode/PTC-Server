const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
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
module.exports = mongoose.model("user", userSchema);

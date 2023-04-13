module.exports = app => {

    const mongoose = require('mongoose');
    require("dotenv").config();

    // mongodb conection
    mongoose
        .connect(process.env.MONGODB_URI)
        .then(() => console.log("Conecction MONGODB"))
        .catch((error) => console.error(error));

};
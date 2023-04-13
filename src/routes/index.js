module.exports = (app) => {
    const express = require("express");
    const userRoutes = require("../routes/user");

    // middleware
    app.use(express.json());
    app.use("/api", userRoutes);

    //routes
    app.get("/", (req, res) => {
        res.send("welcome");
    });
};

const express = require("express");
const userSchema = require("../models/user");

const router = express.Router();

// create user
router.post("/user", (req, res) => {
    const user = userSchema(req.body);
    user.save()
        .then((data) => res.json(data))
        .catch((error) =>
            res.json({
                message: error,
            })
        );
});

// get all user
router.get("/user", (req, res) => {
    userSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// get user
router.get("/user/:id", (req, res) => {
    const { id } = req.params;
    userSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// update user
router.put("/user/:id", (req, res) => {
    const { id } = req.params;
    const { first_name, last_name, state } = req.body;
    userSchema
        .updateOne({ _id: id }, { $set: { first_name, last_name, state } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// state user



module.exports = router;

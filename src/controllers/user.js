import { userSchema } from "../models/user.js";

// create user
export const createUser = (req, res) => {
    const user = userSchema(req.body);
    user.save()
        .then((data) => res.json(data))
        .catch((error) =>
            res.status(500).json({
                message: error,
            })
        );
};

// get all user
export const getAllUser = (req, res) => {
    userSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json({ message: error }));
};

// get user
export const getUser = (req, res) => {
    const { id } = req.params;
    userSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json({ message: error }));
};

// update user
export const updateUser = (req, res) => {
    const { id } = req.params;
    const { first_name, last_name, state } = req.body;
    userSchema
        .updateOne({ _id: id }, { $set: { first_name, last_name, state } })
        .then((data) => res.json({ status: "Mofidicado" }))
        .catch((error) => res.status(500).json({ message: error }));
};

// delete user
export const deleteUser = (req, res) => {
    const { id } = req.params;
    userSchema
        .findByIdAndRemove(id)
        .then((data) => res.json({ status: "Eliminado" }))
        .catch((error) => res.status(500).json({ message: error }));
};

// state user
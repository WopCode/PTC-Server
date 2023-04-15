import { userSchema } from "../models/user.js";

// create user
export const createUser = async (req, res) => {
    try {
        const user = userSchema(req.body);
        const response = await user.save();
        res.json(response);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

// get all user
export const getAllUser = async (req, res) => {
    try {
        const response = await userSchema.find({});
        res.json(response);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

// get user
export const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await userSchema.findById(id);
        res.json(response);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

// update user
export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { first_name, last_name, state } = req.body;
        const response = await userSchema.updateOne(
            { _id: id },
            { $set: { first_name, last_name, state } }
        );
        res.json(response);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

// delete user
export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await userSchema.findByIdAndRemove(id);
        res.json(response);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

// state user

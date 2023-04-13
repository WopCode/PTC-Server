import { Router } from "express";

import {
    getUser,
    createUser,
    getAllUser,
    updateUser,
    deleteUser,
} from "../controllers/user.js";

const router = Router();

// endpoint user
router.post("/user/", createUser);
router.get("/user/", getAllUser);
router.get("/user/:id", getUser);
router.put("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);

export default router;

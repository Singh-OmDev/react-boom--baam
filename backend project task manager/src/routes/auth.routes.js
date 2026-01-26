import express from "express";



import { registerUser, loginUser } from "../controllers/auth.controller.js";

router.post("/login", loginUser);


const router = express.Router();

router.post("/register", registerUser);

export default router;

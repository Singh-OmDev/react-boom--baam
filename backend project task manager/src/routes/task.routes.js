import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import { createTask } from "../controllers/task.controller.js";
 import { getMyTasks } from "../controllers/task.controller.js";

import {
  updateTask,
  deleteTask,
} from "../controllers/task.controller.js";

const router = express.Router();

router.put("/:id", authMiddleware, updateTask);
router.delete("/:id", authMiddleware, deleteTask);


router.post("/", authMiddleware, createTask);
router.get("/", authMiddleware, getMyTasks);


export default router;

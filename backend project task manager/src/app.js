import express from "express";
import authRoutes from "./routes/auth.routes.js";
import taskRoutes from "./routes/task.routes.js";


const app = express();

app.use(express.json());

app.use("/api/tasks", taskRoutes);

app.use("/api/auth", authRoutes);

export default app;

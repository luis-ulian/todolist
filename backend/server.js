import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import taskRoutes from "./src/routes/task.route.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/tasks", taskRoutes);

app.listen(5000, () => {
    connectDB();
    console.log("Server iniciou em http://localhost:5000");
});

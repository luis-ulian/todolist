import express from "express";
import { createTask, deleteTask, getAllTasks, updateTask } from "../controllers/task.controller.js";

const router = express.Router();

router.post("/create", createTask);
router.put("/update/:id", updateTask);
router.delete("/delete/:id", deleteTask);
router.get("/get", getAllTasks);

export default router;
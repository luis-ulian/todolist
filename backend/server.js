import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import taskRoutes from "./src/routes/task.route.js";
import cors from "cors";

dotenv.config();

const app = express();

const corsOptions ={
    origin:'http://localhost:5173', 
    credentials:true,           
    optionSuccessStatus:200
}

app.use(cors(corsOptions));

app.use(express.json());

app.use("/api/tasks", taskRoutes);

app.listen(5000, () => {
    connectDB();
    console.log("Server iniciou em http://localhost:5000");
});

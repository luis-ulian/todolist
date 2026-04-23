import mongoose from "mongoose"

const taskSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true,
            unique: true
        },
        isConcluded:{
            type: Boolean,
            default: false
        }
    }
)

const Task = new mongoose.model("Task", taskSchema);

export default Task;
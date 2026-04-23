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
            required: false,
            unique: true,
            default: false
        }
    }
)
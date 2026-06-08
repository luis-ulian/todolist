import { axiosInstance } from "../lib/axios";
import {create} from "zustand"

export const useTaskStore = create((set) => ({
    newTask: null,
    updatedTask: null,
    tasks: [],
    setTasks: (tasks) => set({tasks}),
    isCreatingTask: false,
    isGettingTasks: false,
    isUpdatingTask: false,

    createTask: async (data) => {
        set({isCreatingTask: true});
        try {
            if(!data.name){
                return {success: false, message: "Tarefa sem nome."} 
            }

            const res = await axiosInstance.post("/tasks/create", data);

            set({newTask: res});
        } catch (error) {
            console.log("erro na useTaskStore createTask func: " + error);
        } finally {
            set({isCreatingTask: false});
        }
    },

    getTasks: async () => {
        set({isGettingTasks: true})
        try {
            const res = await axiosInstance.get("/tasks/get");

            set({tasks: res.data})
        } catch (error) {
            console.log("erro na useTaskStore getTaskss func: " + error);
        } finally {
            set({isGettingTasks: false});
        }
    },

    updateTask: async (data) => {
        set({isUpdatingTask: true});
        try {
            if(!data.name){
                return {success: false, message: "Tarefa sem nome."}
            }

            const res = await axiosInstance.update("/tasks/update/" + data._id, data);

            set({updatedTask: res});
        } catch (error) {
            console.log("erro na useTaskStore updateTask func: " + error)
        } finally {
            set({isUpdatingTask: false});
        }
    }
}));
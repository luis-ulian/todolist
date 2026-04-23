import Task from "../models/task.model.js";

export const createTask = async(req,res) => {
    const { name, isConcluded } = req.body;
    try{
        if(!name){
            res.status(400).json({ message: "Você deve preencher o nome da tarefa!" });
        }
        
        const task = await Task.findOne({ name });
        if(task){
            res.status(400).json({ message: "Já existe uma tarefa com esse nome!" });
        }
        
        const newTask = await Task.create({ name, isConcluded });

        if(newTask){
            await newTask.save();
            res.status(201).json({ 
                _id: newTask._id,
                name: newTask.name,
                isConcluded: newTask.isConcluded 
            });
        } else {
            res.status(400).json({ message: "Erro ao criar a tarefa!" });
        }
    } catch(error){
        res.status(500).json({ message: error.message });
    }
}

export const updateTask = async(req,res) => {
    try{
        const { name } = req.body;
        const { id }   = req.params;
        if(!name){
            return res.status(400).json({ message: "Você deve preencher o nome da tarefa!" });
        }
        const updatedTask = await Task.findByIdAndUpdate(id, { name: name }, { new: true }); 
        //"new: true" retorna o documento atualizado

        res.status(200).json(updatedTask);
    } catch(error){
        res.status(500).json({ message: error.message });
    }
}
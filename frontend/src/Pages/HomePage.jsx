import { useEffect, useState } from 'react'
import { useTaskStore } from "../store/useTaskStore.js"
import { Container, Stack, Box, Input } from '@chakra-ui/react';
import Task from '../Components/Task.jsx';
import {DndContext} from "@dnd-kit/core"
import { arrayMove, SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
const HomePage = () => {
  const {getTasks, tasks, createTask, setTasks, updateTask} = useTaskStore();
  const [newTaskName, setNewTaskName] = useState();
  const handleDragEnd = (event) => {
    const {active, over} = event;

    if(!over) return;

    if(active.id !== over.id){
      const oldIndex = tasks.findIndex(
          (task) => task.order === active.id
      );

      const newIndex = tasks.findIndex(
        (task) => task.order === over.id
      );

      const newTasks = arrayMove(
        tasks,
        oldIndex,
        newIndex
      );

      const reorderedTasks = newTasks.map((task, index) => ({
        ...task,
        order: index
      }));

      setTasks(reorderedTasks);

      for(const task of reorderedTasks){
        console.log(task);
        updateTask(task);
      }
    }
  }
  useEffect(() => {
    getTasks();
  }, [getTasks]);

  return (
    <Container
    paddingTop={"50px"}
    >
      <Stack
      alignItems={"center"}>
        <Box
        w={"600px"}
        h={"50px"}
        padding={"5px"}
        marginRight={"45px"}
        >
          <Input
          placeholder='Nova tarefa...'
          variant={"flushed"}
          size={"md"}
          value={newTaskName}
          onChange={(e) => {
            setNewTaskName(e.target.value);
          }}
          onKeyDown={(e) => {
            if(e.key === "Enter"){
              createTask({name: newTaskName});
              setNewTaskName("");
            }
          }}/>
        </Box>
        <DndContext
        onDragEnd={handleDragEnd}>
          <SortableContext
            items={tasks.map(task => task.order)}
            strategy={verticalListSortingStrategy}>
              {tasks.map((task) => (
                <Task key={task._id} task={task}/>
              ))}
          </SortableContext>
        </DndContext>
        
        
      </Stack>
    </Container>
  )
}

export default HomePage
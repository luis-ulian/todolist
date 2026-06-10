import { useEffect, useState } from 'react'
import { useTaskStore } from "../store/useTaskStore.js"
import { Container, Stack, Box, Input } from '@chakra-ui/react';
import Task from '../Components/Task.jsx';
import {DndContext} from "@dnd-kit/core"
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
const HomePage = () => {
  const {getTasks, tasks, createTask} = useTaskStore();
  const [newTaskName, setNewTaskName] = useState();
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
        <SortableContext
        items={tasks.map(task => task.id)}>
          {tasks.map((task) => (
            <Task key={task._id} task={task}/>
          ))}
        </SortableContext>
        
      </Stack>
    </Container>
  )
}

export default HomePage
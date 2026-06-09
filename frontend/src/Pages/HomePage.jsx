import {useEffect} from 'react'
import {useTaskStore} from "../store/useTaskStore.js"
import { Container, Stack } from '@chakra-ui/react';
import Task from '../Components/Task.jsx';
const HomePage = () => {
  const {getTasks, tasks} = useTaskStore();

  useEffect(() => {
    getTasks();
  }, [getTasks]);

  return (
    <Container
    paddingTop={"75px"}
    >
      <Stack
      alignItems={"center"}>
        {tasks.map((task) => (
          <Task key={task._id} task={task}/>
        ))}
      </Stack>
    </Container>
  )
}

export default HomePage
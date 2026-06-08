import {useEffect} from 'react'
import {useTaskStore} from "../store/useTaskStore.js"
import { Container } from '@chakra-ui/react';
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
      <div>
        {tasks.map((task) => (
          <Task key={task._id} task={task}/>
        ))}
      </div>
    </Container>
  )
}

export default HomePage
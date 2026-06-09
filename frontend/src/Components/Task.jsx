import { useState } from 'react';
import { CheckboxCard, Box, Input } from '@chakra-ui/react'
import { useTaskStore } from "../store/useTaskStore.js"
import { CiSquareRemove } from "react-icons/ci";
const Task = ({task}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [text, setText] = useState(task.name);
    const {deleteTask, updateTask} = useTaskStore();
  return (
    <Box
    display={"flex"}
    alignItems={"center"}
    >
        <CheckboxCard.Root 
        value={(task.isConcluded ? 'on' : 'off')}
        w={"600px"}
        padding={"5px"}
        marginRight={"10px"}
        size={"lg"}
        >
            <CheckboxCard.HiddenInput />
            <CheckboxCard.Control>
                <CheckboxCard.Content>
                    {isEditing ? (
                        <Input
                        autoFocus
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        onBlur={() =>{
                            setIsEditing(false);
                            updateTask({_id: task._id, name: text, isConcluded: task.isConcluded});
                        }}
                        onKeyDown={(e) => {
                            if(e.key === "Enter"){
                                setIsEditing(false);
                                updateTask({_id: task._id, name: text, isConcluded: task.isConcluded});
                            }
                        }}
                        />
                    ) : (
                        <CheckboxCard.Label
                        onDoubleClick={() => setIsEditing(true)}>{text}</CheckboxCard.Label>
                    )}
                </CheckboxCard.Content>
                <CheckboxCard.Indicator />
            </CheckboxCard.Control>
        </CheckboxCard.Root>

        <h1>{task.key}</h1>

        <CiSquareRemove
        size={"35px"}
        onClick={() => {deleteTask(task);}}
        cursor={"pointer"}
        />
    </Box>
  )
}

export default Task
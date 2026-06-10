import { useState } from 'react';
import { CheckboxCard, Box, Input } from '@chakra-ui/react'
import { useTaskStore } from "../store/useTaskStore.js"
import { CiSquareRemove } from "react-icons/ci";
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from "@dnd-kit/utilities"
const Task = ({task}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [text, setText] = useState(task.name);
    const [isChecked, setIsChecked] = useState(task.isConcluded);
    const {deleteTask, updateTask} = useTaskStore();
    const { attributes,
            listeners,
            setNodeRef,
            transform,
            transition,
        } = useSortable({
            id: task.order,
        });
    const style = {
        transform: CSS.Transform.toString(transform),
        transition};
  return (
    <Box
    display={"flex"}
    alignItems={"center"}
    ref={setNodeRef}
    style={style}
    >
        <Box
            {...attributes}
            {...listeners}
            paddingRight={"15px"}
            cursor={"grabbing"}>☰</Box>
        <CheckboxCard.Root 
        onCheckedChange={(details) => {
            setIsChecked(details.checked);
            updateTask({_id: task._id, name: task.name, isConcluded: details.checked});
        }}
        checked={isChecked}
        w={"600px"}
        padding={"5px"}
        marginRight={"10px"}
        size={"lg"}
        display={"flex"}
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
                        onDoubleClick={() => setIsEditing(true)}
                        >{text}</CheckboxCard.Label>
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
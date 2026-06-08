import React from 'react'
import { CheckboxCard } from '@chakra-ui/react'

const Task = ({task}) => {
  return (
    <>
        <CheckboxCard.Root value={(task.isConcluded ? 'on' : 'off')}>
            <CheckboxCard.HiddenInput />
            <CheckboxCard.Control>
                <CheckboxCard.Content>
                    <CheckboxCard.Label>{task.name}</CheckboxCard.Label>
                </CheckboxCard.Content>
                <CheckboxCard.Indicator />
            </CheckboxCard.Control>
        </CheckboxCard.Root>
        <h1>{task.key}</h1>
    </>
  )
}

export default Task
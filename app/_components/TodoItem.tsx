"use client"
import { Checkbox } from '@/components/ui/checkbox'
import React, { useState } from 'react'
import EditModal from './modal-action'
import { ButtonIcon, TrashIcon } from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button'
import { Todo } from '@prisma/client'
import { deleteTodo, updateTodo } from '@/actions/todo'
import { format } from 'path'

type Props = {
    todo: Todo,
}

const TodoItem = ({todo}:Props) => {
    const {title, description, createdAt, isCompleted:initialCompleted} = todo;
    const [isCompleted, setIsCompleted] = useState(initialCompleted);


const handleDelete = async () => {
  deleteTodo({id: todo.id})
}

const handleCheckboxChange = async (checked: boolean) => {
  const updatedCompleted = !!checked;
  setIsCompleted(updatedCompleted); 
  await updateTodo({
    id: todo.id,
    title: todo.title,
    description: todo.description || '', 
    isCompleted: updatedCompleted, 
  });
};

  return (
    <div>
        <div className="flex mb-4 w-full items-center justify-end">
        <div className='w-full'>
        <p className='text-xs'>{new Date(createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' })}</p>
        <h3 className="w-full text-grey-darkest font-semibold">
          {title}
        </h3>
        <div className="text-sm text-gray-500">
       {description ? (
         <p className="text-sm text-gray-500">{description}</p>
         ) : (
          <p className="text-sm text-red-400">You can add description here. Click edit button</p>
         ) } 
        </div>
        </div>
        <div className='flex mb-4 w-full items-center justify-end'>
        <Checkbox 
        checked={isCompleted}
        onCheckedChange={(checked) => handleCheckboxChange(!!checked)} 
          />
        <EditModal todo={todo} />
        <Button onClick={handleDelete} variant="ghost" className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-orange-700 hover:bg-red">
        <TrashIcon/>
        </Button>
        </div>
      </div>
    </div>
  )
}

export default TodoItem

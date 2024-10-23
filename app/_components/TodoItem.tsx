"use client"
import { Checkbox } from '@/components/ui/checkbox'
import React, { useState } from 'react'
import EditModal from './modal-action'
import { ButtonIcon, TrashIcon } from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button'
import { Todo } from '@prisma/client'
import { deleteTodo, updateTodo } from '@/actions/todo'

type Props = {
    todo: Todo,
}

const TodoItem = ({todo}:Props) => {
    const {title, description, createdAt, isCompleted} = todo;


const handleDelete = async () => {
  deleteTodo({id: todo.id})
}

  return (
    <div>
        <div className="flex mb-4 w-full items-center justify-end">
        <div className='w-full'>
        {/* <p className='text-xs'>{createdAt}</p> */}
        <h3 className="w-full text-grey-darkest">
          {title}
        </h3>
        <div className="text-sm text-gray-500">
       {description ?? <p className="text-sm text-gray-500">{description}</p>} 
        </div>
        </div>
        <div className='flex mb-4 w-full items-center justify-end'>
        <Checkbox checked={isCompleted}
            onCheckedChange={(checked) => {updateTodo}}/>
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

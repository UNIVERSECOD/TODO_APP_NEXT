"use client"
import React, { FormEvent, useRef, useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Pencil1Icon } from '@radix-ui/react-icons'
import { Checkbox } from '@/components/ui/checkbox'
import { Todo } from '@prisma/client'
import { updateTodo } from '@/actions/todo'

type Props = {
  todo: Todo
}

const EditModal = ({ todo }: Props) => {
  const { title: initialTitle, description: initialDescription, isCompleted: initialCompleted } = todo;
  const [title, setTitle] = useState(initialTitle);
  const [description, setDescription] = useState(initialDescription);
  const [isCompleted, setIsCompleted] = useState(initialCompleted);

  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);
  const isCompletedRef = useRef<HTMLInputElement>(null);

  const handleEdit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const updatedTitle = titleRef.current?.value.trim();
    const updatedDescription = descriptionRef.current?.value.trim();
    const updatedIsCompleted = isCompletedRef.current?.checked;

    if (!updatedTitle || !updatedDescription) return;

    // Update the todo
    const result = await updateTodo({
      id: todo.id,
      title: updatedTitle,
      description: updatedDescription,
      isCompleted: !!updatedIsCompleted,
    });

    if (!result) return; // Handle error if needed
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-orange-700 hover:bg-red">
          <Pencil1Icon />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Your TODO</DialogTitle>
          <DialogDescription>
            Make changes to your todo items here. Do not forget to save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleEdit} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right">
              Title
            </Label>
            <Input id="title"
              ref={titleRef}
              defaultValue={title}
              className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Input
              id="description"
              ref={descriptionRef}
              defaultValue={description}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="status" className="text-right">
              Status
            </Label>
            <Checkbox
              ref={isCompletedRef}
              defaultChecked={isCompleted}
              id="status"
            />
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default EditModal;

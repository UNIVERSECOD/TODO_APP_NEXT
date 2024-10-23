"use client"
import { createTodo } from "@/actions/todo";
import prisma from "@/lib/prisma";
import React, { useRef } from "react";

const TodoInput = () => {
const ref = useRef<HTMLInputElement>(null);

  const handleTodoCreate = () => {
    const title = ref.current?.value.trim()
    if(!title) return;

    createTodo({title})
  }

  return (
    <div>
      <div className="flex mt-4">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
          placeholder="Add Todo"
        />
        <button onClick={handleTodoCreate} className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-orange-700 hover:bg-teal">
          Add
        </button>
      </div>
    </div>
  );
};

export default TodoInput;

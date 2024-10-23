import React from "react";
import TodoItem from "./TodoItem";
import { Todo } from "@prisma/client";

type Props ={
  todos: Todo[],
}


const TodoList = ({todos}:Props) => {
  return (
    <div className="mt-5 w-full">
      {todos.map(todo => 
<TodoItem key={todo.id} todo={todo}/>
      )}

    </div>
  );
};

export default TodoList;

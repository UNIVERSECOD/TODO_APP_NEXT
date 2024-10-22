"use client"

import { Todo } from "@prisma/client";
import TodoList from "./_components/TodoList"

export default function Home() {
  // const todo: Todo
  return (
    <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
    <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
          <div className="mb-4">
              <h1 className="text-grey-darkest text-indigo-950 text-center text-5xl font-bold">Todo List</h1>
              <div className="flex mt-4">
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Add Todo"/>
                  <button className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-orange-700 hover:bg-teal">Add</button>
              </div>
          </div>
            <TodoList/>
          </div>
      </div>
  );
}

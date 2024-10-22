import React from "react";
import { Checkbox } from "@/components/ui/checkbox"
import {Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button"
import EditModal from "./modal-action";



const TodoList = () => {
  return (
    <div>
      <div className="flex mb-4 items-center">
        <p className="w-full text-grey-darkest">
          Add another component to Tailwind Components
        </p>
        <Checkbox />
        <EditModal/>
        <Button variant="ghost" className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-orange-700 hover:bg-red">
        <TrashIcon/>
        </Button>
      </div>
      <div className="flex mb-4 items-center">
        <p className="w-full line-through text-green">
          Submit Todo App Component to Tailwind Components
        </p>
        <Checkbox />
        <EditModal/>
        <Button variant="ghost" className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-orange-700 hover:bg-red">
          <TrashIcon/>
        </Button>
      </div>
    </div>
  );
};

export default TodoList;

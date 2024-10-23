
import TodoList from "./_components/TodoList"
import TodoHeader from "./_components/TodoHeader";
import TodoInput from "./_components/TodoInput";
import prisma from "@/lib/prisma";

export default async function Home() {
 const todos = await prisma.todo.findMany();
  return (
    <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
          <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
<TodoHeader />
<TodoInput />
<TodoList todos={todos} />
    </div>
      </div>
  );
}

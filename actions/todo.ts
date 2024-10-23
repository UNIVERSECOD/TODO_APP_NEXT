"use server";
import prisma from "@/lib/prisma";
import { log } from "console";
import { revalidatePath } from "next/cache";

export async function createTodo({title}: {title: string}){

    const result = await prisma.todo.create({
        data: {
            title,
        },
});
console.log(result);
return result;
}

export async function deleteTodo({id}: {id: string}){
    try {
        await prisma.todo.delete({
            where: {
                id,
            },
        });
    revalidatePath("/")
    return true;
} catch (err) {
    console.error(err);
    return false;
}
}
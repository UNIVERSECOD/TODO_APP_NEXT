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
revalidatePath("/")
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

export async function updateTodo({id, title, description, isCompleted}: {id: string, description: string, title: string, isCompleted: boolean}){
try{
    await prisma.todo.update({
        where: {
            id,
        },
        data: {
            title,
            description,
            isCompleted,
        },
    });
    revalidatePath("/")
    return true;
}
catch(err){
    console.error(err);
    return false;
}
}
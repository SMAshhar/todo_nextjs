import React from "react";
import { Todo } from "../../../typings";
import { notFound } from "next/navigation";

// if we want dynamic page generation, just below line is required. 
export const dynamicParams = true
// However, if you go out of line, you may get some unsuspected behaviour
// A simple solution is use notfound function from next

type PageProp = {
    params: {
        todoId:string;
    };
}

const fetchTodo = async (todoId:string) => {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${todoId}`, { next: { revalidate: 60 }}   // means keep it cache till 60 seconds. use  { cache: "force-cache" } ## or "no-cache" etc for server side rendering or otherwise. 
    )
 
    const todo : Todo = await res.json();
    return todo;
}


async function TodoPage({params :{todoId}}: PageProp) {
    const todo = await fetchTodo(todoId)

    if (!todo.id) return notFound()
    // Above case will pass on 404. Works but doesnt look good. Make not-found page

    return (
        <div className="p-10 bg-yellow-200 border-black mt-5">
            <p>
                #{todo.id}: {todo.title}
            </p>
            <p>
                Completed: {todo.completed ? 'Yes' : 'No'}
            </p>
            <p className="border-t border-black mt-5 text-right">
                By User: {todo.userId}
            </p>
        </div>
    )
}

export default TodoPage

export async function generateStaticParams() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/`)
    const todos : Todo[] = await res.json();

    // prebuilding 10 pages
    const trimmedTodos = todos.slice(0, 10)
    return trimmedTodos.map(todo => ({
        todoId: todo.id.toString()
    }))
}
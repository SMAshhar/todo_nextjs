import Link from "next/link";
import React from "react";
import { Todo } from "../../typings";
// import { TodoList1 } from "./modules";

const fetchTodo = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
    const todos: Todo[]= await res.json()
    console.log(`This is todos: ${todos}`)
    return todos
}

async function TodosList() {
    const todos = await fetchTodo()
    return <>
      {
        todos.map((todo) => (
            <p key = {todo.id}>
                <Link href={`/todos/${todo.id}`}>Todo: {todo.id}</Link>
            </p>
        ))
      }  
    </>
}

export default TodosList
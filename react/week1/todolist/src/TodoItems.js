import { todos } from "./todosCollection";

export default function TodoList() {
    return (
        <main>
            <ul style={{listStyle:"none"}}>
                {todos.map(todo => <TodoListItem todo={todo} key={todo.id}/>)}
            </ul>
        </main>
    )
}

function TodoListItem ({todo}) {
    return (
        <li>* {todo.description}, {todo.deadline}</li>
    )
}
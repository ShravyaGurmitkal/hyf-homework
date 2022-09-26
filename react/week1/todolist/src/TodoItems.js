import { todos } from "./TodoList";

export default function Items() {
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
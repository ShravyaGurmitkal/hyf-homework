import { todos } from "./todosCollection";
import { useState } from "react";
import TodoListItem from "./TodoListItem";

export default function TodoList() {
    const [todoList, setTodoList] = useState(todos);
    const randomTodos = ["Do HYF homework", "Eat Lunch", "Cook Dinner", "Do Laundry", "Clean Dishes", "Go to danish class"]

    function addTodo() {
        setTodoList(todoList.concat({
            id: todoList.length + 1,
            description: randomTodos[Math.floor(Math.random() * randomTodos.length)]
        }))
    }

    function deleteTodo(todoId) {
        const filteredTodos = todoList.filter(todo => todo.id !== todoId);
        setTodoList(filteredTodos)
    }
  
    return (
        <div style={{textAlign: "center"}}>
            <button onClick={addTodo} style={{fontSize: "22px", backgroundColor: "slategray"}}>Add Todo</button>
            {
                (todoList.length !== 0) ?
                <div>
                    <ul style={{listStyle: "none", fontSize: "22px"}}>
                        {todoList.map(todo => <TodoListItem todo={todo} id={todo.id} deleteTodo={deleteTodo} key={todo.id}/>)}
                    </ul>
                </div> :
                <h3 style={{padding: "5px"}}>No Items</h3>
            }
        </div>
    )
}

// function TodoListItem (props) {
//     console.log(props);
//     const {todo, id} = props;
//     console.log(todo, id);
//     return (
//         <li>
//             <label id={id}>
//                 {todo.description}
//                 <input type="checkbox" onChange={() => markTodo(id)}/>
//             </label>
//             <button onClick={() => deleteTodo(id)}>Delete</button>
//         </li>
//     )
// }

// function markTodo(todoId) {
//     console.log(todoId);
//     console.log(document.querySelectorAll('label'));
//     const label = document.querySelectorAll('label')[todoId-1];
//     console.log(label.children.item(0).checked);
//     (label.children.item(0).checked) ?  label.style.textDecoration = "line-through" :  label.style.textDecoration = "none"
// }

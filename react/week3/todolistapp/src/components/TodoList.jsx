import { useState, useEffect } from "react";
import TodoListItem from "./TodoListItem";
import TodoListInputs from "./TodoListInputs";
import { useCallback } from "react";

const API_URL = "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw";

export default function TodoList(props) {
    const [todoList, setTodoList] = useState([]);

    const fetchTodos = useCallback(() =>{
        fetch(API_URL)
        .then(res => res.json())
        .then(data => {
            setTodoList(data)
        });
    }, [])
   
    
    useEffect(() => {
        fetchTodos();
    }, [fetchTodos])
        

    function addTodo(description, deadline) {
        setTodoList(todoList.concat({
            id: Math.random().toString(16).slice(2),
            description,
            deadline
        }));
       
        return true;
    }

    function deleteTodo(todoId) {
        const filteredTodos = todoList.filter(todo => todo.id !== todoId);
        setTodoList(filteredTodos)
    }

    function updateTodo(todoId, description) {
        todoList.forEach(todo => {
            if(todoId === todo.id) {
                todo.description = description;
            }
        })
        setTodoList(todoList)
    }
  
    return (
        <div className="todoList">
            <TodoListInputs addTodo={addTodo}/>

            {
                (todoList.length !== 0) ?
                <div>
                    <ul className="todoItems">
                        {todoList.map(todo => <TodoListItem todo={todo} id={todo.id} deleteTodo={deleteTodo} updateTodo={updateTodo} key={todo.id}/>)}
                    </ul>
                </div> :
                <h2 style={{padding: "5px"}}>No Items</h2>
            }
        </div>
    )
}
export default function TodoListItem (props) {
    const {todo, id, deleteTodo} = props;

    function markTodo(todoId) {
        const labels = document.querySelectorAll('label');
        
        for (const label of labels) {
            if(Number(label.id) === todoId)
                (label.children.item(0).checked) ?  label.style.textDecoration = "line-through" :  label.style.textDecoration = "none"
        }
    }
    
    return (
        <li style={{margin: "10px"}}>
            <label id={id}>
                {todo.description}
                <input type="checkbox" onChange={() => markTodo(id)}/>
            </label>
            <button onClick={() => deleteTodo(id)} style={{fontSize: "18px", backgroundColor: "slategray"}}>Delete</button>
        </li>
    )
}

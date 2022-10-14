import { useState } from "react";

export default function TodoListItem (props) {
    const {todo, id, deleteTodo} = props;
    const [checked, setChecked] = useState(false);

    return (
        <li style={{margin: "10px"}}>
            <span style={{textDecoration: checked === true ? "line-through" : ""}}>{todo.description}</span>
            <input type="checkbox" onChange={() => setChecked(!checked)}/>
            <button onClick={() => deleteTodo(id)} style={{fontSize: "18px", backgroundColor: "slategray"}}>Delete</button>
        </li>
    )
}

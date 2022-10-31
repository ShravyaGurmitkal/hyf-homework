import { useState } from 'react';
import Border from './Border';

export default function TodoListItem (props) {
    const {todo, id, deleteTodo, updateTodo} = props;
    const [checked, setChecked] = useState(false);
    const [editFlag, setEditFlag] = useState(false);
    const [description, setDescription] = useState(todo.description);
   
    function handleEdit(id) {
        setEditFlag(!editFlag);
    
        if(editFlag){
            updateTodo(id, description);
        }
       
    }
    
    return (
        <li className='todoLi'>
            <Border>
                {
                    editFlag ? 
                        <input
                            type="text"
                            value = {description}
                             onChange={(e) => {setDescription(e.target.value)}}
                        /> :
                        <span style={{textDecoration: checked === true ? "line-through" : ""}}>{description} | {todo.deadline}</span>
                }

                <input type="checkbox" onChange={() => setChecked(!checked)}/>
                <button onClick={() => deleteTodo(id)} className="allButtons">Delete</button>
                <button  className="allButtons" onClick={() => handleEdit(id)} disabled={description.length === 0}>{editFlag ? "Update" : "Edit"}</button>
                {description.length === 0  &&  <p>Description shouldn't be empty to updateTodo</p>}
            </Border>
        </li>
    )
}

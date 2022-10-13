import { useState } from "react";
import DatePicker from 'react-date-picker';
import { format } from 'date-fns';

export default function TodoListInputs(props) {
    const {addTodo} = props;
    const [description, setDescription] = useState("");
    const [deadline, setDeadline] = useState();
    const [addMessage, setAddMessage]= useState("Please add Todo Description and Correct time to enable Add Todo Button");
    let disabled = true;

    function addTodoClick() {
        if(addTodo(description, format(deadline, 'yyyy-MM-dd'))) 
           setAddMessage(`Todo with description "${description}" added`);
    }

    return (
        <div className="inputs">
            Todo Description: <input 
                type="text"
                value = {description}
                onChange={(e) => {setDescription(e.target.value)
                    setAddMessage("")}}
            />

            Deadline: <DatePicker 
                value = {deadline}
                onChange={(date) => {setDeadline(date)
                    setAddMessage("")}}
                
            />

            {deadline <= new Date(new Date().getTime() - 24*60*60*1000) ? <h3>Please select the present or future date to add Todo</h3>  : disabled = false}
            
            {!(description && deadline) && (disabled = true)}

            <button onClick={addTodoClick} className="allButtons" disabled={disabled} >Add Todo</button>

            <h3>{addMessage}</h3>
        </div>
    )
}
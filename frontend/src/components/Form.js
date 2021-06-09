import Button from "./Button"
import {createTask} from '../api/index'
import {useState} from 'react'
import {inputStyle,selectInputStyle} from '../style'

const Form = () =>{
    const [name,setName]=useState('');
    const [date,setDate]=useState(new Date());
    const [priority,setPriority]=useState(1);
    const onClick= async() =>{
        await createTask({"name":name,"dueDate":date,"urgentLevel":priority,"taskStatus":"Waiting"});
        setName('');
        setDate(new Date());
        setPriority(1);
    }
    
    const nameChange= (event) =>{
        setName(event.target.value);
    }
    const dateChange= (event) =>{
        setDate(event.target.value);
    }
    const priorityChange= (event) =>{
        setPriority(event.target.value);
    }

    return (
    <form>
    <input name="name" placeholder="Tum Arai Dee" style={inputStyle} onChange={nameChange}/>
    <input type="date" style={inputStyle} onChange={dateChange} name="due date"/>
    <select name="priority" defaultValue="" style={selectInputStyle} onChange={priorityChange}>
        <option value="" disabled>Task Priority (3 to 1)</option>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
    </select>
    <Button value="Add" onClick={onClick}/>
    </form>
    );
};

export default Form;
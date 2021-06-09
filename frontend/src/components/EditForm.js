import Button from "./Button"
import {editTask} from '../api/index'
import {useState,useEffect} from 'react'
import {inputStyle,selectInputStyle} from '../style'

const EditForm = ({id,propsName,propsDate,propsPrior}) =>{
    const [name,setName]=useState('');
    const [priority,setPriority]=useState(0);
    const [dateString,setDateString]=useState('');

    const onClick= async() =>{
        let body={};
        if(name) body.name=name;
        if(dateString) body.dueDate=dateString;
        if(priority) body.urgentLevel=priority;
        await editTask(id,body);
        setName('');
        setDateString(getDateFormat(new Date()));
        setPriority(1);
    }

    const getDateFormat = (d)=>{
        const dd = String(d.getDate()).padStart(2, '0');
        const mm = String(d.getMonth() + 1).padStart(2, '0'); 
        const yyyy = propsDate.getFullYear();

        const dateS = yyyy+ '-' + mm +  '-' +dd ;
        return dateS
    }
    useEffect(() =>{
        const dateS=getDateFormat(propsDate);
        setDateString(dateS);
    },[propsDate]);

    useEffect(() =>{
        setName(propsName);
    },[propsName]);

    useEffect(() =>{
        setPriority(propsPrior);
    },[propsPrior]);

    
    const nameChange= (event) =>{
        setName(event.target.value);
    }
    const dateChange= (event) =>{
        setDateString(event.target.value);
    }
    const priorityChange= (event) =>{
        setPriority(event.target.value);
    }
    return (
    <form>
    <input name="name" placeholder="Tum Arai Dee" style={inputStyle} value={name} onChange={nameChange}/>
    <input type="date" style={inputStyle} value={dateString} onChange={dateChange} name="due date"/>
    <select name="priority" defaultValue="" style={selectInputStyle} value={priority} onChange={priorityChange} >
        <option value="" disabled >Task Priority (3 to 1)</option>
        <option value='1' >1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
    </select>
    <Button value="Submit" onClick={onClick}/>
    </form>
    );
};

export default EditForm;

// style={{option:checked {
//     display: none;
// }}
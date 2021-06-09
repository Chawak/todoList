import Button from "./Button"
import EditForm from "./EditForm"
import {deleteTask,doneTask,undoneTask} from '../api/index'
import { useState,useEffect } from "react";
const Task = ({name,dueDate,urgentLevel,pid,section}) =>{
    
    const [id,setId]=useState(null);
    const [isEditing,setIsEditing]=useState(false);
    const [date,setDate]=useState(new Date());

    const onEditClick=() =>{
        setIsEditing(!isEditing);
    }
    
    useEffect(() =>{
        setId(pid);
    },[pid]);

    useEffect(() =>{
        const d=new Date(dueDate);
        setDate(d);
    },[dueDate]);

    if(section==="Done")
    return (
        <div>
        <p style={{display:"inline-block",marginRight:"20px"}}>{name} {}</p>
        <Button value="Delete" onClick={()=>deleteTask(id)}/>
        <Button value="Undone" onClick={()=>undoneTask(id)}/>
        </div>
        );
    else
        return (
        <div>
        <p >{name} - due date : {date.getUTCDate()}/{date.getUTCMonth()+1}/{date.getUTCFullYear()} - priorityLevel : {urgentLevel}</p>
        <div >
        <Button value="Done" onClick={()=>doneTask(id)}/>
        <Button value="Delete" onClick={()=>deleteTask(id)}/>
        <Button value="Edit" onClick={()=>onEditClick()}/>
        </div>
        { isEditing ? <EditForm id={id} propsName={name} propsDate={date} propsPrior={urgentLevel} /> : null }
        </div>
        );
};

export default Task;
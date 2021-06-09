import { useEffect, useState } from 'react';
import {getDoneTask,getWaitingTask,getOverdueTask} from '../api/index'
import Task from './Task'
const Tab =  ({value}) =>{
    
    const [reqHistory,setReqHistory]=useState([]);
    
    useEffect(() =>{
        if(value==="Task")
            getWaitingTask().then(result => setReqHistory(result));
        else if(value==="Done")
            getDoneTask().then(result => setReqHistory(result));
        else 
            getOverdueTask().then(result => setReqHistory(result));
    });
    
    return (
        <div>
            <h2 style={{position:"relative",left:"-10em"}}>{value}</h2>
            {reqHistory.map((body) =>{
                return (
                <Task key={body._id} name={body.name} pid={body._id} dueDate={body.dueDate} urgentLevel={body.urgentLevel} section={value}/>
                )
            })}
        </div>
    );
};


export default Tab;
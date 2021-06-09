const basedURL='http://localhost:3001/';

const getWaitingTaskURL=basedURL+'waiting';
const getOverdueTaskURL=basedURL+'overdue';
const getDoneTaskURL=basedURL+'done';

export const getTask = async (id) =>{
    const getTaskURL = `${basedURL}/${id}`; 
    const task=await fetch(getTaskURL);
    return task.json();
};
export const getWaitingTask  = async () =>{
    const task=await fetch(getWaitingTaskURL);
    return task.json();
};
export const getOverdueTask  = async () =>{
    const task=await fetch(getOverdueTaskURL);
    return task.json();
};
export const getDoneTask  = async () =>{
    const task=await fetch(getDoneTaskURL);
    return task.json();
};
export const deleteTask  = async (id) =>{
    const deleteTaskURL = `${basedURL}${id}`;    
    const task=await fetch(deleteTaskURL,{method:"DELETE"});
    return task.json();
};

export const doneTask  = async (id) =>{
    const doneTaskURL = `${basedURL}${id}`;  
    const body={taskStatus:"Done"}
    const task=await fetch(doneTaskURL,{method:"PUT",headers: {'Content-Type': 'application/json'},body:JSON.stringify(body)});
    return task.json();
};
export const undoneTask  = async (id) =>{
    const undoneTaskURL = `${basedURL}${id}`;  
    const body={taskStatus:"Waiting"}
    const task=await fetch(undoneTaskURL,{method:"PUT",headers: {'Content-Type': 'application/json'},body:JSON.stringify(body)});
    return task.json();
};

export const editTask  = async (id,body) =>{
    const editTaskURL = `${basedURL}${id}`;   
    const task=await fetch(editTaskURL,{method:"PUT",headers: {'Content-Type': 'application/json'},body:JSON.stringify(body)});
    return task.json();
};

export const createTask  = async (body) =>{
    
    const task=await fetch(basedURL,{method:"POST",headers: {'Content-Type': 'application/json'},body:JSON.stringify(body)});
    return task.json();
};


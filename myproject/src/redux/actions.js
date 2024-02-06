export function addUser(details){
    return{type:'ADD_USER',payLoad:details}
}
export function updateUser(details){
    return{type:'UPDATE_USER',payLoad:details}
}
export function deleteUser(details){
    return{type:'DELETE_USER',payLoad:details}
}
export function addTaskType(details){
    return{type:'ADD_TASK_TYPE',payLoad:details}
}
export function addTaskList(details){
    return{type:'ADD_TASK_LIST',payLoad:details}
}
export function updateTaskType(details){
    alert(details,"details")
    return{type:'UPDATE_TASK_TYPE',payLoad:details}
}
export function updateTaskList(details){
    alert(details,"details")
    return{type:'UPDATE_TASK_LIST',payLoad:details}
}
export function deleteTaskType(details){
    return{type:'DELETE_TASK_TYPE',payLoad:details}
}
export function deleteTaskList(details){
    console.log("details ",details)
    return{type:'DELETE_TASK_LIST',payLoad:details}
}


export function getTaskList(taskList)
{
    return{type:'GET_TASK_LIST',payLoad:taskList}
}
export function getUsersList(usersList)
{
    return{type:'GET_USER_LIST',payLoad:usersList}
}
export function getTaskType(taskType)
{
    return{type:'GET_TASK_TYPE',payLoad:taskType}
}
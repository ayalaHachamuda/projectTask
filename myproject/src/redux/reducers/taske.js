import produce from 'immer';

const initialState = {
    taskType: [
        // { taskTypeId: '1', taskTypeName: 'משימה' },
        // { taskTypeId: '2', taskTypeName: 'באג' }
    ],
countTaskType:2,
    taskList: [
        // { taskId: '1', taskTypeId: '1', taskName: 'דוח תלמידים', contactTaskID: '123456789', contactTaskName: 'שרה לוי' },
        // { taskId: '2', taskTypeId: '2', taskName: 'לא מעדכן שמוצר נגמר במלאי', contactTaskID: '112233445', contactTaskName: 'יעקב הלל'},
        // { taskId: '3', taskTypeId: '2', taskName: 'לא מעדכן שמוצר נגמר במלאי', contactTaskID: '325745222', contactTaskName: 'אילה צדוק'},
        // { taskId: '4', taskTypeId: '2', taskName: 'לישון', contactTaskID: '325745222', contactTaskName: 'אילה צדוק'},
        // { taskId: '5', taskTypeId: '2', taskName: 'ללכת לטיול', contactTaskID: '325745222', contactTaskName: 'אילה צדוק'},
        // { taskId: '6', taskTypeId: '2', taskName: 'לסיים פרוייקט', contactTaskID: '325745222', contactTaskName: 'אילה צדוק'}
    ],
    countTaskList:3
};

export default produce((state, action) => {
    console.log(state,"state")
    switch (action.type) {
        
        case 'ADD_TASK_TYPE': {console.log("ADD_TASK_TYPEADD_TASK_TYPEADD_TASK_TYPE"); state.taskType.push(action.payLoad);state.countTaskType+=1 }
            break;
            case 'UPDATE_TASK_TYPE':
                {
                    const taskTypeFound=state.taskType.find(x=>x.taskTypeId==action.payLoad.taskTypeId)
                    if(taskTypeFound!=null){
                        taskTypeFound.taskTypeName=action.payLoad.taskTypeName;
                    
                   
                }
                else
                console.log(state,"state")
                console.log('the taskType not found!')
                }
                break;
                case 'DELETE_TASK_TYPE':
                    const index=state.taskType.findIndex(x=>x.taskTypeId===action.payLoad.taskTypeId)
                    if (index) {
                        //const index = state.usersList.indexOf(userDelete); // Get the index of the object
                      
                        if (index > -1) {
                            state.taskType.splice(index, 1); // Remove the object from the array
                        }
                     
                    }
                    else
                      console.log('the taskType not found!')
                       break;
                    
                case 'ADD_TASK_LIST': { state.taskList.push(action.payLoad) ;state.countTaskList+=1}
                break;
                case 'UPDATE_TASK_LIST':
                {
                    console.log(action.payLoad.taskId,'action.payLoad.taskId')
                    const taskListFound=state.taskList.find(x=>x.taskId==action.payLoad.taskId)
                    if(taskListFound!=null){
                        taskListFound.taskListName=action.payLoad.taskListName;
                        // contactTaskName:editedContactTaskName
                        taskListFound.taskTypeId=action.payLoad.taskTypeId;
                        taskListFound.taskName=action.payLoad.taskName;
                        taskListFound.contactTaskID=action.payLoad.contactTaskID;
                        taskListFound.contactTaskName=action.payLoad.contactTaskName;
                        console.log(taskListFound,'the taskList was changed!!!:)')
                        console.log(state.taskList[1],'the taskList was changed!!!:)')
                        alert("המשימה עודכנה בהצלחה!");
                    }
                    
                    else
                    console.log('the taskList not found!')
                }
                break;
                case 'DELETE_TASK_LIST':
                    console.log(action.type)
                    console.log('DELETE_TASK_LIST')
                    const indexTaskList=state.taskList.findIndex(x=>x.taskId==action.payLoad.taskId)
                   console.log('state.taskList ',state.taskList[0],state.taskList[1])
                    console.log('indexTaskList ',indexTaskList)
                    if (indexTaskList>-1) {
                        //const index = state.usersList.indexOf(userDelete); // Get the index of the object
                        console.log('1אני בתנאי ')
                        //if (indexTaskList > -1) {
                            state.taskList.splice(indexTaskList, 1); // Remove the object from the array
                            console.log('2אני בתנאי ')
                            console.log('state.taskList ',state.taskList[0],state.taskList[1])
                       // }
                       alert("המשימה נמחקה בהצלחה!")
                     
                    }
                    else
                    //console.log(state.taskList,"state")
                      console.log('the taskList not found!')

                      console.log('taskList ',state.taskList[0],state.taskList[1])

                      break;
                      case 'GET_TASK_LIST':
                        { state.taskList=action.payLoad}
                     break;
                     case 'GET_TASK_TYPE':
                         { state.taskType=action.payLoad}
                      break;
    }

}, initialState) 


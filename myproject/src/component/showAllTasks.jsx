import React from "react";
import { useEffect, useRef, useState } from "react";
import { connect, useDispatch } from 'react-redux';
import { addTaskList, addTaskType,deleteTaskType,getAllTasks } from "../redux/actions";
import { useParams, Navigate, useNavigate, useLocation } from 'react-router-dom'
import Task from './task';
import axios from "axios";
import '../App.css';


import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { grey } from "@mui/material/colors";
import { colors } from "@mui/material";

// const DemoPaper = styled(Paper)(({ theme }) => ({
//   width: 180,
//   height: 300,
//   padding: theme.spacing(2),
//   ...theme.typography.body2,
//   textAlign: 'center',
//   // color:red
  
// }));

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 180,
  height: 300,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: 'center',
  color: grey[900],
  backgroundColor: 'transparent',
  boxShadow: theme.shadows[1],
  
}));

function mapStateToProps(state) {
  return {
    taskList: state.taske.taskList,
    taskType: state.taske.taskType,
    countTaskList: state.taske.countTaskList,
    countTaskType: state.taske.countTaskType
  };
}
export default connect(mapStateToProps)(function ShowAllTasks(props) {
  const getAllTasks=async()=>{
    try{
      const response=await axios.get('http://localhost:5000/task')
      const responseType=await axios.get('http://localhost:5000/task/TaskType')

      console.log(response.data);
      if(response.status==200&&responseType.status==200)

      {
        console.log("getTasksList");
        dispatch(getTaskType(responseType.data))

        dispatch(getTasksList(response.data))
      }
    }
    catch(error){
      console.log("pppp");
      console.error(error);

    }
  }
  const addTaskList=async()=>{
    try{
      const newTask={ taskTypeId: countTaskType + 1, taskTypeName: taskTypeNameRef.current.value}


      const response=await axios.post('http://localhost:5000/task',newTask)
      console.log(response.data);
      if(response.status==200)
      {
        console.log("addTaskList");

        dispatch(addTaskList(newTask))

      }
    }
    catch(error){
     
      console.error(error);

    }
  }

  const { taskList, taskType, countTaskList, countTaskType } = props;
  const newNavigate = useNavigate()
  const location = useLocation()
  const userId = location.state && location.state.userId
  console.log("userId", userId)
  console.log("location", location)
  let taskTypeIdRef = useRef('');
  let taskNameRef = useRef('');
  let contactTaskIDRef = useRef('');
  let contactTaskNameRef = useRef('');
  const [inputTaskId, setInputTaskId] = useState('');
  const [senderTask, setSenderTask] = useState('');
  const [showAllTasks, setShowAllTasks] = useState(true);
  const [showTask, setshowTask] = useState(false);
  let taskTypeNameRef = useRef('');
  // useEffect(function () {
  //   console.log("ShowAllTasks", taskList)
  // }, [taskList, taskType, countTaskList, countTaskType])
  useEffect(()=>{getAllTasks()},[])
  const dispatch = useDispatch();

  const addTask = () => {
    addTaskList()
    // dispatch(addTaskList({
    //   taskId: countTaskList + 1, taskTypeId: taskTypeIdRef.current.value, taskName: taskNameRef.current.value,
    //   contactTaskID: contactTaskIDRef.current.value, contactTaskName: contactTaskNameRef.current.value
    // }));
  }
  const senddingInputTaskId = (value) => {
    console.log(value);
    let member = taskList.find(x => x.taskId == value)
    console.log(member, "taskList[index]//////")
    setSenderTask(member)
    console.log(senderTask, "SenderTask//////")
    setShowAllTasks(false);
    setshowTask(true);
  };
  const addTaskTypeHere = () => {
    dispatch(addTaskType({ taskTypeId: countTaskType + 1, taskTypeName: taskTypeNameRef.current.value }));

  }
  const updateAndDel = ((id) => {
    console.log(`id`, id)
    newNavigate("/task", { state: { id } })
  })

  const DeleteTaskType = (taskTypeId) => {

    dispatch(deleteTaskType({ taskTypeId: taskTypeId }))
    newNavigate("/showAllTasks", { state: { userId } })


  };

  return (
    <div>

      <h1>המשימות שלי:</h1>
      <Stack direction="row" spacing={countTaskList} position="sticky"class="Stack">
      {taskList.map((task) => {
        if (task.contactTaskID == userId) {
          return (
            // class="DemoPaper"
            <DemoPaper variant="elevation" >
            <div key={task.taskId}>
              <h3>{task.taskName}</h3>
              <button onClick={() => updateAndDel(task.taskId)}>מחיקה/עדכון</button>
              {/* <button onClick={updateAndDel(task.taskId)}>מחיקה/עדכון</button> */}
              <p>קוד משימה: {task.taskId}</p>
              <p>קוד סוג משימה: {task.taskTypeId}</p>
              <p>תעודת זהות משתמש: {task.contactTaskID}</p>
              <p>שם משתמש: {task.contactTaskName}</p>
            </div>
            </DemoPaper>
          );
        }
        
        // If the condition is not met, return null or an empty fragment
        return null
      })}</Stack>
      <h1>סוגי משימות:</h1>
      {taskType.map((type) => (
        <div key={type.taskTypeId}>

          <h3>שם סוג משימה: {type.taskTypeName}</h3>
          <p>קוד סוג משימה: {type.taskTypeId}</p>
          {/* <button onClick={() => DeleteTaskType(type.taskTypeId)}>מחיקה</button> */}
        </div>
      ))}
      <h1>אם ברצונך להוסיף משימה הוסף כאן:</h1>
      <br></br>
      <label>קוד סוג משימה</label>
      <input ref={taskTypeIdRef}></input>
      <br></br>
      <label>שם משימה</label>
      <input ref={taskNameRef}></input>
      <br></br>
      <label>תעודת זהות משתמש לביצוע המשימה</label>
      <input ref={contactTaskIDRef}></input>
      <br></br>
      <label>שם משתמש לביצוע המשימה</label>
      <input ref={contactTaskNameRef}></input>
      <br></br>
      <button onClick={addTask}>הוספת משימה</button>
      <h1>אם ברצונך להוסיף סוג משימה הוסף כאן:</h1>
      <br></br>
      <label>שם סוג משימה:</label>
      <input ref={taskTypeNameRef}></input>
      <br></br>
      <button onClick={addTaskTypeHere}>הוספת סוג משימה</button>
      
      <div>

      </div>
    </div>
  );

})






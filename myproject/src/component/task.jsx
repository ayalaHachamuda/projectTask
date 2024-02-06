import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { updateTaskList, deleteTaskList } from '../redux/actions';
import { useEffect, useState } from "react";
import { useParams, Navigate, useNavigate, useLocation } from 'react-router-dom'
import axios from "axios";
function mapStateToProps(state) {
  return {
    taskList: state.taske.taskList
  };
}
export default connect(mapStateToProps)(function Task(props) {
  const deleteTaskList=async()=>{
    try {
      console.log(id);
      const response=await axios.delete(`http://localhost:5000/task/${id}`)
  console.log(response.data);
  if(response.status==200)
  {
    console.log("getUsersList");

    dispatch(deleteTaskList(id))

  }
      
    } catch (error) {
      console.error(error);
    }
  }
  const updateTaskList=async()=>{
    try {
     
      const updatedTask = {
        taskId: id,
        taskTypeId: editedTaskTypeId,
        taskName: editedTaskName,
        contactTaskID: editedContactTaskID,
        contactTaskName: editedContactTaskName

      };
       console.log(updatedTask);
      const response=await axios.put(`http://localhost:5000/task/${updatedTask}`)
  console.log(response.data);
  if(response.status==200)
  {
    console.log("getUsersList");

    dispatch(updateTaskList(updatedTask))

  }
      
    } catch (error) {
      console.error(error);
    }
  }
  console.log('אני במשימה');
  console.log(mapStateToProps.taskList, 'mapStateToProps');
  const { taskList } = props;
  const location = useLocation()
  const id=location.state&&location.state.id
  //const task = taskList.filter(t=>t.taskId == id)

  const task=taskList.find(x=>x.taskId==id)


  const newNavigate=useNavigate();
  const [editedTaskTypeId, setEditedTaskTypeId] = useState(task.taskTypeId);
  const [editedTaskName, setEditedTaskName] = useState(task.taskName);
  const [editedContactTaskID, setEditedContactTaskID] = useState(task.contactTaskID);
  const [editedContactTaskName, setEditedContactTaskName] = useState(task.contactTaskName);
  const [showAllTasks, setShowAllTasks] = useState(false);
  const [showTask, setshowTask] = useState(true);
  
 
  console.log("task", task)
  console.log("location", location)
  useEffect(function () {
    console.log("taskList33333333333333333333333333333", taskList)
  }, [taskList])
  const dispatch = useDispatch();
  const handleEdit = () => {
    //alert("המשימה עודכנה בהצלחה!");
    // const updatedTask = {
    //   taskId: id,
    //   taskTypeId: editedTaskTypeId,
    //   taskName: editedTaskName,
    //   contactTaskID: editedContactTaskID,
    //   contactTaskName: editedContactTaskName
    // };
    // console.log("updatedTask",updatedTask)
    // console.log(updatedTask.contactTaskID,"סתכלי!!!!!1111")
    // dispatch(updateTaskList(updatedTask))
    updateTaskList();
    //newNavigate("/showAllTasks", { state: { userId: task.userId } })
    // console.log(updatedTask.contactTaskID,"סתכלי!!!!!2222")
    newNavigate('/showAllTasks', { state: { userId: editedContactTaskID  } })
  };
  const handleDelete = () => {
    console.log(task,"סתכלי!!!!!333333")
    deleteTaskList();
    // dispatch(deleteTaskList({ taskId: id }))
    newNavigate("/showAllTasks", { state: { userId: task.contactTaskID } })
    console.log(task.contactTaskID,"סתכלי!!!!!4444444")
    
  };
  // const register = () => {
  //   setshowTask(false);
  //   setShowAllTasks(true);
  // }
  //if (showTask) {
    return (
      <div>
        <h3>פרטי משימה</h3>
        <p>קוד משימה: {id}</p>
        <p>קוד סוג משימה: <input type="text" value={editedTaskTypeId} onChange={(e) => setEditedTaskTypeId(e.target.value)} /></p>
        <p>שם משימה: <input type="text" value={editedTaskName} onChange={(e) => setEditedTaskName(e.target.value)} /></p>
        <p>תעודת זהות משתמש לביצוע המשימה: <input type="text" value={editedContactTaskID} onChange={(e) => setEditedContactTaskID(e.target.value)} /></p>
        {/* <p>שם משתמש לביצוע המשימה: <input type="text" value={editedContactTaskName} onChange={(e) => setEditedContactTaskName(e.target.value)} /></p> */}
        <button onClick={handleEdit}>עריכת משימה</button>
        <button onClick={handleDelete}>מחיקת משימה</button>
        {/* <button onClick={() => register()}>לרשימת משימות</button> */}
        {/* {showAllTasks && <showAllTasks></showAllTasks>} */}
      </div>
    );
  // }
  // return (
  //   <>
  //     {showAllTasks && <showAllTasks></showAllTasks>}
  //   </>
  // );
})





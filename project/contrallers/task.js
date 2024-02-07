
// const taskType = [
//     { taskTypeId: '1', taskTypeName: 'בבית' },
//     { taskTypeId: '2', taskTypeName: 'מחוץ לבית' }
// ]
// //taskTypeCount: 2,
// const taskList = [
//     { taskId: '1', taskTypeId: '1', taskName: 'שטיפת כלים' },
//     { taskId: '2', taskTypeId: '1', taskName: 'שטיפת ריצפה' },
//     { taskId: '3', taskTypeId: '1', taskName: 'לטאטא ריצפה' },
//     { taskId: '4', taskTypeId: '1', taskName: 'לנקות שיש' },
//     { taskId: '5', taskTypeId: '1', taskName: 'לנקות חלונות' },

//     { taskId: '6', taskTypeId: '2', taskName: 'קניות' },
//     { taskId: '7', taskTypeId: '2', taskName: 'לצאת עם הילדים לגינה' },
//     { taskId: '8', taskTypeId: '2', taskName: 'לקחת את הילדים לגן' }
// ]
//סיימתי עמוד זה ללא סוג משימה
const taskList = require("../models/task")
const taskType = require("../models/taskType")
exports.addTaskType = async (req, res) => {
    //const { taskTypeId, taskTypeName } = req.body;
    const task = await taskType.create(req.body);
   
    res.json(task);

   // console.log(req.body);
    
}
exports.AddTask = async (req, res) => {
  //const { taskId, taskTypeId, taskName } = req.body;
  const task = await taskList.create(req.body);
 
  res.json(task);

 // console.log(req.body);
  
}
exports.getAllTasks = async(req, res) => {
    try {
        const tasks = await taskList.find()
        res.json(tasks)
      }
      catch (error) {
        console.error('Failed to get tasks:', error);
        res.status(500).json({ message: 'Failed to get tasks' });
      }


   // return res.status(200).json({ taskList: taskList })
}
exports.getTaskType = async(req, res) => {
  try {
      const tasks = await taskType.find()
      res.json(tasks)
    }
    catch (error) {
      console.error('Failed to get taskType:', error);
      res.status(500).json({ message: 'Failed to get taskType' });
    }


 // return res.status(200).json({ taskList: taskList })
}
exports.deleteTaskById =async (req, res) => {
  const {taskId} = req.params;
  console.log(taskId,"taskId")
    try {
      const deletedTask = await taskList.findOneAndDelete({  taskId });
      if (!deletedTask) {
        res.status(404).json({ message: 'task not found' });
      }
      else{
        res.status(200).json({ message: 'task deleted successfully' });
    }
    } catch (error) {
      console.error('Failed to delete task:', error);
      res.status(500).json({ message: 'Failed to delete task' });
    }

}
exports.deleteTaskType =async (req, res) => {
  const taskTypeId = req.params.taskTypeId
console.log("in deleteTaskType");
  try {
    const deletedTask = await taskType.findOneAndDelete({ taskTypeId: taskTypeId });
    if (!deletedTask) {
      return res.status(404).json({ message: 'taskTypeId not found' });
    }
    res.json({ message: 'taskTypeId deleted successfully' });
  } catch (error) {
    console.error('Failed to delete taskTypeId:', error);
    res.status(500).json({ message: 'Failed to delete taskTypeId' });
  }

}
exports.updateTaskByTaskId =async (req, res) => {
  const taskId = req.params.taskId; // קח את מזהה המשימה מפרמטר ה-URL
  const { taskName, taskTypeId,contactTaskID } = req.body;
  try {
    const updatedTask = await taskList.findOneAndUpdate(
      { taskId: taskId }, // Find the task by task ID
      { $set: { taskName, taskTypeId, contactTaskID } }, // Update the name and task type ID
      { new: true } // Return the updated task
    );
  
    if (!updatedTask) {
      res.status(404).json({ message: 'Task not found' });
    } else {
      res.status(200).json({ message: 'Task updated successfully', updatedTask });
    }
  } catch (error) {
    console.error('Failed to update task:', error);
    res.status(500).json({ message: 'Failed to update task' });
  }
  // try {
  //   const updatedTask = await taskList.findOneAndUpdate(
  //     { taskId: taskId }, // מצא את המשימה לפי מזהה המשימה
  //     { taskName: taskName, taskTypeId: taskTypeId,contactTaskID:contactTaskID }, // עדכן את השם ואת מזהה סוג המשימה
  //     { new: true } // החזר את המשימה המעודכנת
  //   );
  
  //     if (!updatedTask) {
  //        res.status(404).json({ message: 'task not found' });
  //     }
  //     else{
  //       res.status(200).json({message:'task description update successfully'});
  //   }
  //     //res.json(updatedTask);
  //   } catch (error) {
  //     console.error('Failed to update task:', error);
  //     res.status(500).json({ message: 'Failed to update task' });
  //   }


}
exports.updateTaskType =async (req, res) => {
  const taskTypeId = req.params.taskTypeId
  
  const {  taskTypeName } = req.body
  console.log("in updateTaskType")
  try {
    const updatedTask = await taskType.findOneAndUpdate(
      {taskTypeId:taskTypeId}, 
       {taskTypeName:taskTypeName},
      { new: true }
    );

    if (!updatedTask) {
      return res.status(404).json({ message: 'taskType not found' });
    }

    res.json(updatedTask);
  } catch (error) {
    console.error('Failed to update taskType:', error);
    res.status(500).json({ message: 'Failed to update taskType' });
  }


}

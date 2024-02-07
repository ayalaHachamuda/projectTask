//סיימתי עמוד זה
const express = require('express')
const router = express.Router()
const { Task } = require("../models/task");
// const { TaskType } = require("../models/taskType");
// const task=require("../models/task");
const {AddTask,getAllTasks,deleteTaskById,updateTaskByTaskId,addTaskType,getTaskType,deleteTaskType,updateTaskType} =require('../contrallers/task')

router.get('/',getAllTasks)
router.post('/',AddTask)
router.put('/:taskId',updateTaskByTaskId)
router.delete('/:taskId',deleteTaskById)

// router.get('/TaskType',getTaskType)
// router.post('/TaskType',addTaskType)
// router.get('/:taskTypeId',updateTaskType)
// router.delete('/:taskTypeId',deleteTaskType)
module.exports = router;
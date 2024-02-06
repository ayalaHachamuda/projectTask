//סיימתי עמוד זה
const express = require('express')
const router = express.Router()
const task=require("../models/task");
const {AddTask,getAllTasks,deleteTaskById,updateTaskByTaskId,addTaskType,getTaskType,deleteTaskType,updateTaskType} =require('../contrallers/task')

router.get('/',getAllTasks)
router.post('/',AddTask)
router.get('/:taskId',updateTaskByTaskId)
router.delete('/:id',deleteTaskById)

router.get('/TaskType',getTaskType)
router.post('/TaskType',addTaskType)
router.get('/:taskTypeId',updateTaskType)
router.delete('/:taskTypeId',deleteTaskById)
module.exports = router;
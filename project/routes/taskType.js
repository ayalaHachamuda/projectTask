const express = require('express')
const router = express.Router()

const { TaskType } = require("../models/taskType");
// const task=require("../models/task");
const {addTaskType,getTaskType,deleteTaskType,updateTaskType} =require('../contrallers/task')

// router.get('/',getAllTasks)
// router.post('/',AddTask)
// router.get('/:taskId',updateTaskByTaskId)
// router.delete('/:taskId',deleteTaskById)

router.get('/',getTaskType)
router.post('/',addTaskType)
router.put('/:taskTypeId',updateTaskType)
router.delete('/:taskTypeId',deleteTaskType)
module.exports = router;
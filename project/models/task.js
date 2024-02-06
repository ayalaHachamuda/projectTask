//סיימתי עמוד זה
const mongoose = require('mongoose')

const TaskSchema=new mongoose.Schema({
    taskId:Number, 
    taskName: String, 
    taskTypeId:Number
})
const TaskTypeSchema=new mongoose.Schema({
    taskTypeId:Number, 
    taskTypeName: String
})

module.exports=mongoose.model('TAssk',TaskSchema)
module.exports=mongoose.model('TAsskType',TaskTypeSchema)
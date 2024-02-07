//סיימתי עמוד זה
const mongoose = require('mongoose')

const TaskSchema=new mongoose.Schema({
    taskId:Number, 
    taskName: String, 
    taskTypeId:Number,


    
        contactTaskID:String
})

module.exports=mongoose.model('TAssk',TaskSchema)
// const TaskTypeSchema=new mongoose.Schema({
//     taskTypeId:Number, 
//     taskTypeName: String
// })
// const Task=mongoose.model('TAssk',TaskSchema)


// const Task=mongoose.model('TAssk',TaskSchema)

// const TaskType=mongoose.model('TAsskType',TaskTypeSchema)



// module.exports = {
//     Task,
//     TaskType
// }
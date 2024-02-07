require("dotenv").config()
const cors = require('cors');
const express=require('express');
const app=express();
// app.use(express.json())
const mongoose = require('mongoose')


const taskRoutes = require('./routes/task')
const taskTypeRoutes = require('./routes/taskType')
const userRouter =require('./routes/user')
const bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.json());
app.use('/user', userRouter);
app.use('/task',taskRoutes)
app.use('/taskType',taskTypeRoutes)
const LoggerMiddleware=(req,res,next)=>{
    console.log(`Logged ${req.url} ${req.method} --${new Date()}`);
    next();
}
app.use(LoggerMiddleware)
// app.listen(3000,function(){
//     console.log("in port 3002");
// });


const CONECTION_URL='mongodb+srv://ayala18me:dxqC1900e8E9SZD4@cluster0.rw3juom.mongodb.net/?retryWrites=true&w=majority';
const PORT= 5000;


mongoose.connect(CONECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true}).then(
    ()=>app.listen(PORT,()=>console.log(`server runing on port ${PORT}`)))
.catch((error)=>console.log(error.message))
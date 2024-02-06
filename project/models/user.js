//סיימתי עמוד זה
const mongoose = require('mongoose')

const UserSchema=new mongoose.Schema({
idNumber:String, 
firstName: String, 
lastName:String
})


module.exports=mongoose.model('Uswwer',UserSchema)
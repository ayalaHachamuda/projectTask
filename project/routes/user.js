//סיימתי עמוד זה למה בהוספת משתמש לא עושים גם קישור עם נקודתיים ?
const express = require('express')
const router = express.Router()
const User=require("../models/user");
const {AddUser,getAllUsers,deleteUserById,updateUserById} =require('../contrallers/user')
//  router.post('/:newUser',AddUser)
router.delete('/:id',deleteUserById)
router.put('/:id',updateUserById)
 router.get('/',getAllUsers)
router.post('/',AddUser)
// router.delete('/:id',deleteUserById)
// router.get('/',getAllUsers)
// router.get('/:id',updateUser)
module.exports = router;


//-חושבת שהבנתי וסודר----------- -סיימתי עמוד זה צריכה הבהרות בנוגע לשימוש בין פרמס לבודי-------
const usersList = require("../models/user")
exports.AddUser = async (req, res) => {
  console.log(req.body);
  const { idNumber, firstName, lastName } = req.body;
  const user = await usersList.create(req.body);
  console.log(user,"user");
  // usersList.push(req.body)
  res.status(200).json({message:usersList})
}
exports.getAllUsers = async (req, res) => {
  try {
    const users = await usersList.find()
    res.status(200).json({message:usersList})
  }
  catch (error) {
    console.error('Failed to get users:', error);
    res.status(500).json({ message: 'Failed to get users' });
  }
  //return res.status(200).json({usersList:usersList})
}
// exports.getAllUsers = async(req,res)=>{
exports.deleteUserById = async (req, res) => {
  const idNumber = req.params.id

  console.log(idNumber);
  try {
    const deletedUser = await usersList.findOneAndDelete({ idNumber: idNumber });
    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Failed to delete user:', error);
    res.status(500).json({ message: 'Failed to delete user' });
  }




  // const index = usersList.findIndex(x=>x.idNumber === idNumber)

  // usersList.splice(index,1)

  // res.send(usersList)
}
exports.updateUserById = async (req, res) => {
  const { idNumber } = req.params.id
  const { firstName, lastName } = req.body
  //const index = usersList.findIndex(x=>x.idNumber === idNumber)
  try {
    const updatedUser = await usersList.findOneAndUpdate(
      { idNumber: idNumber }, // עדכון לפי שדה userId
      { firstName, lastName },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(updatedUser);
  } catch (error) {
    console.error('Failed to update user:', error);
    res.status(500).json({ message: 'Failed to update user' });
  }
};


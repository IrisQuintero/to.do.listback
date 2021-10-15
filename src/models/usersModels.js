const { usersSchema } = require("../schemas/usersSchemas/usersSchemas");
const mongoose = require("mongoose");
const userModel = mongoose.model("usersdbs", usersSchema);

async function showUsersModel() {
    try {
        return await userModel.find();
      } catch (error) {
        console.log(error);
      }
};

async function selectUsersModel(user){
  console.log(user + "modelo")
  return await userModel.findById(user)
};

async function createNewUserOnDB(usersData) {
    console.log(usersData);
    return userModel.create(usersData);
  };

  async function updateUserModel(user) {
    console.log(user + "modelo");
    return await userModel.findByIdAndUpdate(user.id, { new: true });
  };
  
  async function deleteUserModel(user) {
    console.log(user);
    return await userModel.findByIdAndDelete(user);
  };
  


  

module.exports = {
  showUsersModel,
  selectUsersModel, 
  createNewUserOnDB, 
  updateUserModel,
  deleteUserModel
};

const {
  showUsersModel,
  selectUsersModel,
  createNewUserOnDB,
  updateUserModel,
  deleteUserModel,
} = require("../models/usersModels");

async function showUsers() {
  try {
    return await showUsersModel();
  } catch (error) {
    throw new Error("Users db not found");
  }
};

async function selectUser(user) {
  try {
    return await selectUsersModel(user);
  } catch (error) {
    throw new Error(error);
  }
};

async function createNewUser(usersData) {
  try {
    console.log(usersData);
    return await createNewUserOnDB(usersData);
  } catch (error) {
    throw new Error(error);
  }
};

async function updateUser(user) {
  try {
    return await updateUserModel(user);
  } catch (error) {
    throw new Error(error);
  }
};

async function deleteUser(ticket) {
  try {
    return await deleteUserModel(ticket);
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  showUsers,
  selectUser,
  createNewUser,
  updateUser,
  deleteUser
};

const express = require("express");
const router = express.Router();

const {
  showUsers,
  selectUser,
  createNewUser,
  updateUser,
  deleteUser,
} = require("../services/userServs");

//trae la lista de los usuarios

router.get("/getUsers", async function (req, res) {
  try {
    const data = await showUsers();
    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

//muestra solo un usuario
//falta corregir => este es el error 61675abc8d45ce3cad28589modelo
router.get("/getUser/:id", async function (req, res) {
  try {
    const user = req.params.id;
    const data = await selectUser(user);
    res.send(data + "base de datos");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error on get data");
  }
});

//crea un usuario nuevo

router.post("/createUser", async function (req, res) {
  try {
    let body = req.body;
    console.log(body);
    const data = await createNewUser(body);
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});

//Actaliza o hace cambios en los datos del usuario
router.patch("/updateUser", async function (req, res) {
  try {
    const user = req.body;
    const data = await updateUser(user);
    res.send(data + "Base de datos actualizada");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error");
  }
});

//Borra al usuario de la lista
router.delete("/deleteUser/:id", async function (req, res) {
  try {
    const user = req.params.id;
    const data = await deleteUser(user);
    res.send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send("error on get data");
  }
});

module.exports = router;

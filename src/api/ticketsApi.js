const express = require("express");
const router = express.Router();

const {
  showTickets,
  selecTicket,
  createNewTicket,
  updateTicket,
  deleteTicket,
} = require("../services/ticketServs");

//Api=1,5 Servivces=2,4 Models=3

//Muestra la lista completa de tickets

router.get("/getTickets", async function (req, res) {
  try {
    const data = await showTickets();
    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

//Muestra solo un ticket,

router.get("/getTicket/:id", async function (req, res) {
  try {
    const ticket = req.params.id;
    const data = await selecTicket(ticket);
    res.send(data + "base de datos");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error on get data");
  }
});

//Agrega una tarea nueva

router.post("/createTickets", async function (req, res) {
  try {
    let body = req.body;
    // console.log(body);
    const data = await createNewTicket(body);
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});


//Actualiza una tarea en la lista

router.patch("/updateTicket", async function (req, res) {
  try {
    const ticket = req.body;
    console.log(ticket)
    const data = await updateTicket(ticket);
    res.send(data + "Base de datos actualizada");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error");
  }
});

//Borra una tarea de la lista
//falta corregir

router.delete("/deleteTicket/:id", async function (req, res) {
  try {
    const ticket = req.params.id;
    const data = await deleteTicket(ticket);
    res.send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send("error on get data");
  }
});

module.exports = router;

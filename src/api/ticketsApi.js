
const express = require("express");
const multerMiddleware = require("../config/multer");
const router = express.Router();

const { showTickets, selecTicket } = require("../services/ticketServs");


//Api=1,5 Servivces=2,4 Models=3

//Aqui creo el endpoint para acceder a todos los tickets, de aqui se manda la
//orden a services

router.get("/getTickets", async function (req, res){
    try {
        const data = await showTickets()
        res.send(data);
    } catch (error) {
        res.status(500).send("Error on get tickets data")
        
    }
});

//con este endpoint quiero traer solo un ticket
router.get("/getTickets/ticket", async function(req, res){
    try {
        const ticket = req.body
        const data = await selecTicket(ticket)
        res.send(data + "base de datos");
    } catch (error) {
        console.log(error)
        res.status(500).send("Error on get data")
    }
});

//Aqui creo el endpoint para agregar una tarea nueva
//**** como sabe cual es la data que le eestoy pasando?
//**** necesito usar multer si no tengo imagenes?
router.post("/createTickets", multerMiddleware.any(), async function (req,res){
    try {
        let body = req.body;
        console.log(body);
        res.send("datos guardados")
    } catch (error) {
        console.log(error + "error de middleware")

        
    }
});

//aqui se van a modificar los tickets
router.patch("/upadateTicket", async function (req, res){
    try {
        const ticket = req.body
        const data = await updateTicket(ticket)
        res.send(data + "Base de datos actualizada");
    } catch (error) {
        console.log(error)
        res.status(500).send("Error")
    }
})


module.exports = router;


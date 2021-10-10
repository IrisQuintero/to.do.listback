
const express = require("express");
const router = express.Router();

const { showTickets } = require("../services/ticketServs");

router.get("/getTickets", async function (req, res){
    try {
        const data = await showTickets()
        res.send(data);
    } catch (error) {
        res.status(500).send("Error on get tickets data")
        
    }
});

module.exports = router;
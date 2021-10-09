const { showTicketsModel } = require("../models/ticketsModel");

async function showTickets(){
    try {
        return await showTicketsModel()
    } catch (error) {
        throw new Error("Tickets db not found");
    }
};


module.exports = {
    showTickets
};
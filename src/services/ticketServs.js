const { showTicketsModel } = require("../models/ticketsModels");

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
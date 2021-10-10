const { ticketsSchema } = require("../schemas/tickestSchemas/ticketSchemas");
const mongoose = require("mongoose");
const ticketModel = mongoose.model("ticketsdb", ticketsSchema);

async function showTicketsModel(){
    return await ticketModel.find();
};

module.exports = {
 showTicketsModel    
};
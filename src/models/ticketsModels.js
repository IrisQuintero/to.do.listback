const { ticketsSchema } = require("../schemas/ticketSchemas/ticketSchemas");
const mongoose = require("mongoose");
const ticketModel = mongoose.model("ticketsdbs", ticketsSchema);

//quiero que esta función me traiga la lista completa de la base de datos y la muestre en pantalla

async function showTicketsModel() {
  try {
    return await ticketModel.find();
  } catch (error) {
    console.log(error);
  }
}

async function selecTicketsModel(ticket) {
  //console.log(ticket + "modelo");
  return await ticketModel.findById(ticket);
}

//quiero que esta otra me cree una tarea nueva

async function createNewTicketOnDB(ticketsData) {
  console.log(ticketsData);
  return ticketModel.create(ticketsData);
}

async function updateTicketModel(ticket) {
  console.log(ticket + "modelo");
  return await ticketModel.findByIdAndUpdate(ticket._id,{ tema:ticket.tema}, { new: true });
}

async function deleteTicketModel(ticket) {
  console.log(ticket);
  return await ticketModel.findByIdAndDelete(ticket._id);
}

module.exports = {
  showTicketsModel,
  selecTicketsModel,
  createNewTicketOnDB,
  updateTicketModel,
  deleteTicketModel,
};

const {
  showTicketsModel,
  selecTicketsModel,
  createNewTicketOnDB,
  updateTicketModel,
  deleteTicketModel,
} = require("../models/ticketsModels");

async function showTickets() {
  try {
    return await showTicketsModel();
  } catch (error) {
    throw new Error(error);
  }
};

async function selecTicket(ticket) {
  try {
    return await selecTicketsModel(ticket);
  } catch (error) {
    throw new Error(error);
  }
};

async function createNewTicket(ticketsData) {
  try {
    console.log(ticketsData);
    return await createNewTicketOnDB(ticketsData);
  } catch (error) {
    throw new Error(error);
  }
};

async function updateTicket(ticket) {
  try {
    console.log(ticket)
    return await updateTicketModel(ticket);
  } catch (error) {
    throw new Error(error);
  }
};

async function deleteTicket(ticket) {
  try {
    return await deleteTicketModel(ticket);
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  showTickets,
  selecTicket,
  createNewTicket,
  updateTicket,
  deleteTicket,
};

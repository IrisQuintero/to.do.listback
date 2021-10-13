const { showTicketsModel, selecTicketsModel, createNewTicketOnDB } = require("../models/ticketsModels");

async function showTickets(){
    try {
       return await showTicketsModel()
    } catch (error) {
        throw new Error(error);
    }
};

async function selecTicket(ticket){
    try {
        return await selecTicketsModel(ticket)
    } catch (error) {
        throw new Error (error);
        
    }
};

async function createNewTicket(ticketsData){
    try{
     console.log(ticketsData)
    return await createNewTicketOnDB(ticketsData); 
    
    }catch(error){
        throw new Error(error);
    }
};


async function updateTicket(ticket){
    try {
        return await updateTicketModel(ticket)  
    } catch (error) {
        throw new Error(error)
    }
};


module.exports = {
    showTickets,
    selecTicket,
    createNewTicket, 
    updateTicket
};
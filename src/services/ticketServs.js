const { showTicketsModel, selecTicketsModel } = require("../models/ticketsModels");

async function showTickets(){
    try {
        return await showTicketsModel()
    } catch (error) {
        throw new Error("Tickets db not found");
    }
};

async function selecTicket(ticket){
    try {
        return await selecTicketsModel(ticket)
    } catch (error) {
        throw new Error (error);
        
    }
};

async function createNewTicket({ticketsData}){
    try{
     const newTicket = {
        tema: ticketsData.tema,
        detalleCaso: {nombreSolicitante: ticketsData.nombreSolicitante, contactoSolicitante:{
            telefono: ticketsData.telefono, coreeo: ticketsData.correo},
            curso: ticketsData.curso,
            statusSolicitante: ticketsData.statusSolicitante,
            descripcionCaso: ticketsData.descripciónCaso
        },
        statusCaso: ticketsData.statusCaso,
        fechaYHora: ticketsData.fechaYHora,
        asignado:{area: ticketsData.area,  idEncargado: ticketsData.area }
    
    };
            
    console.log(newTicket)
    await createNewTicketOnDB({ticketsData : newTicket}); 
    
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
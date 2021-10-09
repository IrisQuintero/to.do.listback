const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ticketsSchema = new Schema({

    tema: String,
    detalleCaso: {
        nombreSolicitante: String,
        contactoSolicitante:{
            telefono: Number,
            coreeo: String
        },
        curso: String,
        statusSolicitante: String,
        descripcionCaso: String
    },
    statusCaso: String,
    fechaYHora: String,
    asignado:{
        area: String,
        idEncargado: String
    }
});

module.exports = { ticketsSchema }
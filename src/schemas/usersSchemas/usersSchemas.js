const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  _id: String,
  nombreUsuario: String,
  contacto: {
    telefono: Number,
    correo: String,
  },
  usertype: String,
});

module.exports = { usersSchema };
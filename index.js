const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const mongoose = require("mongoose");

const ticketsRoute = require("./src/api/ticketsApi");
const usersRoute = require("./src/api/usersApi")


const uri = "mongodb+srv://Iris:1234@ticketsdbcluster.nzzjm.mongodb.net/ticketdbcluster?retryWrites=true&w=majority";
mongoose.connect(uri);

const database = mongoose.connection;

database.once("open", ()=>{
    console.log("Conection to db open");
})

database.on("error", console.error.bind(console, "Conection error"));

app.use(express.json());
app.use(cors());

app.use("/tickets", ticketsRoute);
app.use("/users", usersRoute);

 app.listen(port,() => {
 console.log(`Example app listening at http://locslhost:${port}`);
 
});
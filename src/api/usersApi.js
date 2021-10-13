
// const express = require("express");
// const multerMiddleware = require("../config/multer");
// const router = express.Router();

// const { showUsers } = require("../services/userServs");


// router.get("/getUsers", async function (req, res){
//     try {
//         console.log("getUsers")
//         const data = await showUsers()
//         res.send(data);
//     } catch (error) {
//         res.status(500).send("Error on get users data")
        
//     }
// });

// router.get("/getUsers/user", async function(req, res){
//     try {
//         const user = req.body
//         const data = await selectUser(user)
//         res.send(data + "base de datos");
//     } catch (error) {
//         console.log(error)
//         res.status(500).send("Error on get data")
//     }
// });


// router.post("/createUser", multerMiddleware.any(), async function (req,res){
//     try {
//         let body = req.body;
//         console.log(body);
//         res.send("datos guardados")
//     } catch (error) {
//         console.log(error + "error de middleware")

        
//     }
// });


// module.exports = router;
const express = require("express");
const bodyParser = require("body-parser");
// const router = require("./routers/user_router");

const http = require('http');



const app = express();
const port = express.port || 3000;
const server = http.createServer(app);
// const { Server } = require("socket.io");
// const { on } = require("events");
// const io = new Server(server);


app.use(bodyParser.json());

// const mongoose = require('mongoose');
// const { timeStamp } = require("console");
// const messageModel = new mongoose.Schema({
//    message: String,
// }, { versionKey: false, timestamps: true });




server.listen(port, () => {
   const address = server.address();
   console.log("Server Started on " + address.port);
})


// io.on('connection', async (socket) => {
//    console.log('a user connected ' + socket.id);



//    // init list of users

//    socket.on("init", async () => {
//       const userData = await getMessgaes();
//       socket.emit("users", userData);
//    });

//    socket.on("add-message", async (mmg) => {
//       await msg.create({ message: mmg });
//       const userData = await getMessgaes();
//       socket.emit("users", userData);
//    });

//    socket.on('disconnect', () => {
//       console.log('user disconnected ' + socket.id);
//    });
// });

// async function getMessgaes() {

//    return await msg.find({});
// };

app.get('/', (req, res) => {
   res.send("Hello world");
});
// app.use("/user", router);







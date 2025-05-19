const express = require("express");
const bodyParser = require("body-parser");
const router = require("./routers/user_router");
const http = require('http');




const app = express();
const port = express.port || 3000;
const server = http.createServer(app);
const { Server } = require("socket.io");
const { on } = require("events");
app.io = new Server(server);


app.use(bodyParser.json());

// console.log(io.Server);



server.listen(port, () => {
   const address = server.address();
   console.log("Server Started on " + address.port);
})


app.io.on('connection', async (socket) => {
   console.log('a user connected ' + socket.id);


   socket.on('disconnect', () => {
      console.log('user disconnected ' + socket.id);
   });
});


app.get('/', (req, res) => {
   const socket = app.io;
   socket.emit("kd","hello world from users");
   res.send("Hello world ");
});
app.use("/user", router);







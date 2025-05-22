const app = require("express")();
const server = require('http').Server(app);
const io = require("socket.io")(server);
require('dotenv').config();

// get mongo db
require('./wab_server/mongo_db/db.js');

const bodyParser = require("body-parser");

const userRoute = require("./wab_server/routers/user_router");
const authRouter = require("./wab_server/routers/auth_router.js");

app.io = io;
app.use(bodyParser.json());

// start the server
server.listen(process.env.PORT, () => {
   const address = server.address();
   console.log("Server Started on " + address.port);
})


// app.io.on('connection', async (socket) => {
//    console.log('a user connected ' + socket.id);


//    socket.on('disconnect', () => {
//       console.log('user disconnected ' + socket.id);
//    });
// });



app.use('/auth', authRouter);
app.use("/user", userRoute);







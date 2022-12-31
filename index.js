const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const socketIO = require("socket.io");
const io = socketIO(server);

//use /public folder as a static rendered
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile("/index.html");
});

//socket
io.on("connect", (socket) => {
  //logging when someone connected
  console.log("User connected");
  //receive message
  socket.on("chat message", (msg) => {
    //send message
    io.emit("chat message", msg);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

server.listen(3000, '0.0.0.0',() => {
  console.log("listening on port 3000");
});

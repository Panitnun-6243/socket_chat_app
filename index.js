const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const socketIO = require("socket.io");
const io = socketIO(server);

//use /public folder as a static rendered
app.use(express.static(__dirname + "/public"))

app.get("/", (req, res) => {
  res.sendFile("/index.html")
});

server.listen(3000, () => {
  console.log("listening on port 3000");
});

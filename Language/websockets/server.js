// run this file with node server.js

import { log } from "console";
import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin:
      process.env.NODE_ENV === "production"
        ? false
        : ["http://localhost:5500", "http://127.0.0.1:5500"],
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  log(`Client ${socket.id} connected`);
  io.emit("message", `Client ${socket.id} connected`);

  socket.on("open", () => {
    console.log("Client connected");
  });

  socket.on("message", (data) => {
    console.log(`Received data => ${data}`);
    io.emit("message", `${socket.id.substring(0, 5)}: ${data}`);
  });

  socket.on("close", () => {
    console.log("Client disconnected");
  });

  socket.on("error", (error) => {
    console.log(`Error: ${error}`);
  });
});

httpServer.listen(3500, () => {
  console.log("Server running on port 3500");
});

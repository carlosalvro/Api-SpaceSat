const socketIO = require('socket.io');
const socket = {};

function connect(server) {
  socket.io = socketIO(server, {
    cors: {
      origin: "http://127.0.0.1:5500"
    }
  });
}

module.exports = {
  connect, 
  socket,
};
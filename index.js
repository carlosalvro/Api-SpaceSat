const express = require("express");
const cors = require("cors");
const routerApi =  require("./routes");
const {errorHandler, boomErrorHandler } = require("./middlewares/error.handler");

const socket = require("./socket");
const port = 3001;
const app = express();
const server = require("http").Server(app);

app.use(express.json());
//CORS
const whitelist = ["http://localhost:8080", "http://127.0.0.1:5500", "http://localhost:5500"]; //Lista de paginas que pueden acceder a la api
const options = {
  origin: (origin, callback) =>  {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("No permitido"));
    }
  }
}
app.use(cors(options));
socket.connect(server)

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/main.html");
})

routerApi(app);

app.use(boomErrorHandler);
app.use(errorHandler);

server.listen(port, () => {
  console.log("Corriendo en el puerto " + port)
});
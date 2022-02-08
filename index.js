const express = require("express");
const cors = require("cors");
const routerApi =  require("./routes");
const {errorHandler, boomErrorHandler } = require("./middlewares/error.handler");
const {checkApiKey} = require("./middlewares/auth.handler")

const port = 3001;
const app = express();

app.use(express.json());
//CORS
const whitelist = ["http://localhost:8080"]; //Lista de paginas que pueden acceder a la api
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

app.get("/", checkApiKey, (req, res) => {
  res.send("Hola este es el home");
})

routerApi(app);

app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log("Corriendo en el puerto " + port)
});
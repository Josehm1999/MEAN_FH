const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
require("dotenv").config();

const Database = require("./lib/Database");
const router = require("./routes/auth.route");

const app = express();
const port = process.env.API_PORT || 8080;

// Morgan
app.use(morgan("common"));

// Public Directory
app.use(express.static("public"));

//CORS
app.use(cors());

//Lectura y parseo del body
app.use(express.json());

// Routes
app.use("/api/auth", router);

// Added headers / Security
app.use(helmet());

app.listen(port, async () => {
  await Database.getModels();
  console.log(`Servidor corriendo en puerto ${port}`);
});

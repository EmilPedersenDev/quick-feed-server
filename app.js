require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./services/dbConfig");

const Port = process.env.PORT || 4000;
const app = express();

let corsOptions = {
  origin: process.env.BASE_URL,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

connectDB();

app.get("/", (req, res) => {
  res.json({ message: "Appen fungerar" });
});

// routes
require("./controllers/team.controller")(app);

app.listen(Port, () => {
  console.log("server is running");
});

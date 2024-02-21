const express = require("express");
const bodyParser = require('body-parser');

const mongoConnect = require("./util/database");
const manageEmployees = require("./controllers/manageEmployees");

const app = express();
const port = process.env.PORT || 3002;

app.use(express.json());
app.use("/manageEmployees", manageEmployees);

mongoConnect(() => {
  app.listen(port);
  console.log("server started on port ", port);
});

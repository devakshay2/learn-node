const express = require("express");

const { mongoConnect } = require("./util/database");

const app = express();
const port = process.env.PORT || 3002;

app.use(express.json());
// app.use("/manageEmployees");

mongoConnect(() => {
  app.listen(port);
  console.log("server started on port ", port);
});

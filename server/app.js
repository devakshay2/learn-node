const express = require("express");
const dotenv = require("dotenv").config();

const { mongoConnect } = require("./util/database");
const manageEmployees = require("./routes/manageEmployees");
const miscellaneousAPI = require("./routes/miscellaneousAPI");

const app = express();
const port = process.env.PORT || 3005;

app.use(express.json());
app.use("/manageEmployees", manageEmployees);
app.use("/miscellaneous", miscellaneousAPI);
app.get("/", (req, res) => {
  res.status(200).send({ status: "ok" });
});

app.use((req, res) => {
  res.status(404).send({
    error: true,
    message: "This route is not defined. Please try specified ones.",
  });
});

app.use((error, req, res) => {
  console.log("Middleware Error Hadnling");
  const errStatus = error.statusCode || 500;
  const errMsg = error.message || "Something went wrong";
  res.status(errStatus).json({
    success: false,
    status: errStatus,
    message: errMsg,
    stack: process.env.NODE_ENV === "DEVELOPMENT" ? error.stack : {},
  });
});

mongoConnect(() => {
  app.listen(port);
  console.log("server started on port ", port);
});

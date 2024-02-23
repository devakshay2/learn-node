const express = require("express");

const { mongoConnect } = require("./util/database");
const manageEmployees = require("./routes/manageEmployees");

const app = express();
const port = process.env.PORT || 3001;

console.log("idr aya mai 2");

app.use(express.json());
app.use("/manageEmployees", manageEmployees);
app.use("/", (req, res) => {
  res.status(200).send({ status: "ok" });
});

mongoConnect(() => {
  app.listen(port);
  console.log("server started on port ", port);
});

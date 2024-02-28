const express = require("express");

const { mongoConnect } = require("./util/database");
const manageEmployees = require("./routes/manageEmployees");

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use("/manageEmployees", manageEmployees);
app.get("/", (req, res) => {
  res.status(200).send({ status: "ok" });
});

app.use((req, res) => {
  res.status(404).send({
    error: true,
    message: "This route is not defined. Please try specified ones.",
  });
});

mongoConnect(() => {
  app.listen(port);
  console.log("server started on port ", port);
});

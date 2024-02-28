const { mongoConnect } = require("../util/database");
const mongoCollectionNames = require("../util/mongoCollectionNames");

const express = require("express");

const router = express.Router();

router.post("/create", async (req, res, next) => {
  console.log("user creation began...");
  const dbclient = await mongoConnect();
  const collection = dbclient.collection(mongoCollectionNames.EMPLOYEES);
  await collection.insertOne(req.body);
  res
    .status(200)
    .send({ error: false, message: "Employee added successfully." });
});

router.use("/update", (req, res, next) => {});

router.use("/delete", (req, res, next) => {});

router.use("/fetch", (req, res, next) => {});

module.exports = router;

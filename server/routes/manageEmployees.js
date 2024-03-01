const { mongoConnect } = require("../util/database");
const mongoCollectionNames = require("../util/mongoCollectionNames");

const express = require("express");

const router = express.Router();

router.post("/create", async (req, res) => {
  console.log("user creation began...");
  const { body } = req;
  const fields = Object.keys(body);
  for (let i = 0; i < fields.length; i++) {
    if (!body[fields[i]]) {
      res
        .status(500)
        .send({ error: false, message: "All fields are required." });
      return;
    }
  }
  const dbclient = await mongoConnect();
  const collection = dbclient.collection(mongoCollectionNames.EMPLOYEES);
  await collection.insertOne(req.body);
  res
    .status(200)
    .send({ error: false, message: "Employee added successfully." });
});

router.use("/update", (req, res, next) => {});

router.use("/delete", (req, res, next) => {});

router.get("/list", async (req, res) => {
  console.log("fetching data...");
  try {
    const dbclient = await mongoConnect();
    const collection = dbclient.collection(mongoCollectionNames.EMPLOYEES);
    const result = await collection.find({}).toArray();
    console.log(result);
    res.status(200).json({
      error: false,
      message: "List loaded successfully.",
      data: result,
    });
  } catch {
    res
      .status(500)
      .json({ error: false, message: "Server error occured.", data: [] });
  }
});

router.get("/addSamples", (req, res, next) => {
  fetch("https://api.slingacademy.com/v1/sample-data/files/employees.json", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then(async (data) => {
      const dbclient = await mongoConnect();
      const collection = dbclient.collection(mongoCollectionNames.EMPLOYEES);
      await collection.insertMany(
        data.map((item) => {
          return {
            name: `${item.first_name} ${item.last_name}`,
            age: item.age,
            jobTitle: item.job_title,
            email: item.email,
            gender: item.gender,
            salary: item.salary,
            department: item.department,
            phone: item.phone,
            yearsOfExperience: item.years_of_experience,
            employeeId: item.id,
          };
        })
      );
      console.log("done");
      res.status(200).json({
        error: false,
        message: "Sample data added successfully.",
        data: data,
      });
    })
    .catch();
});

module.exports = router;

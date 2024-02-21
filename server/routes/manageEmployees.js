const express = require("express");

const manageEmployeesController = require("../controllers/manageEmployees");

const router = express.Router();

router.use((req, res, next) => {});

router.get("/employees", manageEmployeesController.getEmployees);

module.exports = router;

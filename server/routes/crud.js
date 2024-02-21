const express = require("express");

const crudController = require("../controllers/crud");

const router = express.Router();

router.get("/employees", crudController.getEmployees);

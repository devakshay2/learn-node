const express = require("express");

const router = express.Router();

console.log('idr aaya mai');

router.use("create", (req, res, next) => {
  console.log("user creation began...");
});

router.use("update", (req, res, next) => {});

router.use("delete", (req, res, next) => {});

router.use("fetch", (req, res, next) => {});

module.exports = router;

const express = require("express");
const bcrypt = require("bcrypt");
const UserModel = require("../models/UserModel");

const router = express.Router();

router.get("/", (req, res) => res.send("this is the user router"));

module.exports = router;
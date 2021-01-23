const express = require("express");
const bcrypt = require("bcrypt");
const UserModel = require("../models/UserModel");

const router = express.Router();

router.get("/", (req, res) => res.send("this is the user router"));

router.get("/my-items", (req, res) => res.send("this is where my items will be displayed"));

module.exports = router;
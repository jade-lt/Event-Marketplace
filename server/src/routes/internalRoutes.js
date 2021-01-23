const express = require("express");

const router = express.Router();

router.get("/", (req, res) => res.send("this is the internal router"));

router.get("/_health", (req, res) => res.send("health route OK"));

module.exports = router;
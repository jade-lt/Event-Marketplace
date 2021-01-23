const express = require("express");
const HireItemModel = require("../models/HireItemModel");

const router = express.Router();

router.get("/", (req, res) => res.send("this is the hire items router"));

router.get("/test", (req, res) => res.send("test OK"));

router.post("/new-hire-item", (req, res) => {
    const reqBody = req.body;
    HireItemModel.create(reqBody).then((data) => {
        console.log(data);
        res.send("item added successfully");
    });
});

router.get("/my-items", (req, res) => res.send("this is where my items will be displayed"));

module.exports = router;
 
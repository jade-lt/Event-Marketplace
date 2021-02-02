const express = require("express");
const HireItemModel = require("../models/HireItemModel");
const ItemCategoryModel = require("../models/ItemCategoryModel");

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

router.patch("/update-item/:id", (req, res) => {
  HireItemModel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    upsert: true,
  })
    .then((data) => {
      console.log("item updated successfully");
      res.send(data);
    })
    .catch(() => {
      console.log("something went wrong");
      res.status(404).send("this item doesn't exist");
    });
});

router.delete("/delete-item/:id", (req, res) => {
    HireItemModel.findByIdAndDelete(req.params.id)
    .then((data) => {
        console.log("item deleted successfully");
        res.send(data);
    })
    .catch(() => {
        console.log("something went wrong");
        res.status(404).send("this item doesn't exist");
    });
});

module.exports = router;
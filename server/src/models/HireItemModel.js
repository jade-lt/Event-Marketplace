const mongoose = require("mongoose");

const hireItemSchema = mongoose.Schema({
  catergoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "category",
  },
  itemName: String,
  itemColor: String,
  dimensions: String,
  numberAvailable: Number,
  costPerHire: String,
  available: Boolean,
  imgUrl: String,
  costToPurchase: String,
  supplier: String
});

module.exports = mongoose.model("HireItem", hireItemSchema);

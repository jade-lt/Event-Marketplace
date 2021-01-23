const mongoose = require("mongoose");

const hireItemSchema = mongoose.Schema({
    itemName: String,
    itemColor: String,
    dimensions: String,
    numberAvailable: Number,
    costPerHire: String,
    available: Boolean
});

module.exports = mongoose.model("HireItem", hireItemSchema);
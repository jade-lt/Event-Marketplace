const mongoose = require("mongoose");

const hireItemSchema = mongoose.Schema({
    itemName: String,
    numberAvailable: Number,
    dimensions: String,
    costPerHire: String,
    available: Boolean
});

module.exports = mongoose.model("HireItem", hireItemSchema);
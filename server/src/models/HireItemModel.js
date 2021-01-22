const mongoose = require("mongoose");

const hireItemSchema = mongoose.Schema({
    itemName: String,
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "category",
    },
    numberAvailable: Number,
    dimensions: String,
    costPerHire: Number
});

module.exports = mongoose.model("HireItem", hireItemSchema);
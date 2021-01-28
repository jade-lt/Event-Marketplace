const mongoose = require("mongoose");

const itemCategorySchema = mongoose.Schema({
    name: String
});

module.exports = mongoose.model("Category", itemCategorySchema);
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    userName: String,
    password: String
});

module.exports = mongoose.model("users", userSchema);
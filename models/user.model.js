const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/");

const userSchema = new mongoose.Schema({
  fullname: String,
  email: String,
  password: String,
  cart: {
    type: Array,
    default: [],
  },
  isadmin: {
    type: Boolean,
    default: false,
  },
  orders: {
    type: Array,
    default: [],
  },
  contract: {
    type: Number,
  },
  picture: String,
});

module.exports = mongoose.model("user", userSchema);

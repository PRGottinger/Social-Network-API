const { Schema, model } = require("mongoose");

const User = new Schema({
  userName: {
    type: String,
    trim: true,
  },
  createdBy: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  size: {
    type: String,
    default: "Large",
  },
  toppings: [],
});

model.exports = User;

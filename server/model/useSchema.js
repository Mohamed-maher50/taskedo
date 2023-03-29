const mongoose = require("mongoose");
const { isEmail } = require("validator");
const { hastPassword } = require("../utils/hashPassword");
const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "Full Name"],
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: [true, "email"],
    trim: true,
    validate: [isEmail, "invalid email"],
  },
  password: {
    type: String,
    required: [true, "password"],
  },
  fullName: String,
  birthDay: {
    type: Date,
    required: true,
    trim: true,
  },
});

userSchema.pre("save", async function () {
  this.password = await hastPassword(this.password);
});

module.exports = mongoose.model("User", userSchema);

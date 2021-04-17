const { Schema, model } = require("mongoose");

//create trainer model
const trainerSchema = new Schema(
  {
    username: String,
    password: String,
  },
  {
    //add update and create date to the Schema
    timestamps: true,
  }
);

module.exports = model("Trainer", trainerSchema);

const { Schema, model } = require("mongoose");

//create trainer model
const trainerSchema = new Schema({
  username: String,
  password: String,
},
{
  //add update data controller to mongodb
  timestamps: true
});

module.exports = model("Trainer", trainerSchema);

const PokemonTrainer = require("../models/TrainerUser");
// const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../data.env");

async function createUser(req, res) {
  //destructuring req data
  const { username, password } = req.body;
  //create new PokemonTrainer
  const newUser = new PokemonTrainer({ username, password });
  //save to database
  await newUser.save();
  //create token to send -- payload, secret, options
  const token = jwt.sign({ _id: newUser._id }, config.SECRET_KEY);
  res.status(200).json({ token });
}

module.exports = createUser;

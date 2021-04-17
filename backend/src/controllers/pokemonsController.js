const Pokemon = require("../models/Pokemon");
// const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../data.env");

async function createPokemon(req, res) {
  //destructuring req data
  const { pokemonName, type, level, abilities } = req.body;
  console.log(pokemonName, type, level, abilities);
  //Split the bearer - token and select token
  const token = req.headers.authorization.split(" ")[1];
  const payload = jwt.verify(token, config.SECRET_KEY);
  //set token payload to request
  req.trainerId = payload._id;
  const trainerId = req.trainerId;
  console.log(trainerId);
  //create new Pokemon
  const newPokemon = new Pokemon({
    trainerId,
    pokemonName,
    type,
    level,
    abilities,
  });
  //save to database
  await newPokemon.save();
  res.status(200).json("Correct Pokemon save");
}

async function getPokemons(req, res) {
  //Split the bearer - token and select token
  const token = req.headers.authorization.split(" ")[1];
  const payload = jwt.verify(token, config.SECRET_KEY);
  //set token payload to request
  req.trainerId = payload._id;
  const trainerId = req.trainerId;
  console.log(trainerId);
  const data = await Pokemon.find({ trainerId: trainerId });
  //compare the id id trainer and id trainer on pokemons data
  res.send(data);
}

async function editPokemon(req, res) {
  const { id } = req.params;
  const newPokemonData = {
    pokemonName: req.body.pokemonName,
    type: req.body.type,
    level: req.body.level,
    abilities: req.body.abilities,
  };

  await Pokemon.findByIdAndUpdate(id, { $set: newPokemonData }, { new: true });
  res.json({ status: "Pokemon update" });
}

module.exports = {
  createPokemon,
  getPokemons,
  editPokemon,
};

const { Schema, model } = require("mongoose");

//create trainer model
const pokemonSchema = new Schema({
  trainerId: String,
  pokemonName: String,
  type: String,
  level: Number,
  abilities: String,
  evolutions: {
      evolutionName: String,
      evolutionTypes: [String],
      evolutionLvl: [Number]
  }
},
{
  //add update and create date to the Schema 
  timestamps: true
});

module.exports = model("Pokemon", pokemonSchema);

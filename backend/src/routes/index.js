const { Router } = require("express");
const router = Router();
const PokemonTrainer = require("../models/TrainerUser");

//all api routes
router.get("/", (req, res) => res.send(""));

//route to add User on database
router.post("/singup", async (req, res) => {
  //destructuring req data
  const { username, password } = req.body;
  //create new PokemonTrainer
  const newUser = new PokemonTrainer({ username, password });
  //save to database
  await newUser.save();
  res.send("testing singup");
});

module.exports = router;

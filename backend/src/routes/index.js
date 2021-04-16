const { Router } = require("express");
const router = Router();
const Pokemon = require("../models/Pokemon");
const jwt = require("jsonwebtoken");
const config = require("../data.env");
const authController = require("../controllers/authController");
const singUpController = require("../controllers/signUpController");

//all api routes
router.post("/getPokemons", async (req, res)=> {
  //destructuring req data
  const { pokemonName, type, level, abilities  } = req.body;
  console.log(pokemonName, type, level, abilities);
  //Split the bearer - token and select token
  const token = req.headers.authorization.split(" ")[1];
  const payload = jwt.verify(token, config.SECRET_KEY);
  //set token payload to request
  req.trainerId = payload._id;
  const trainerId = req.trainerId;
  console.log(trainerId);
  //create new Pokemon
  const newPokemon = new Pokemon({ trainerId, pokemonName, type, level, abilities });
  //save to database
  await newPokemon.save();
  res.status(200).json("Correct Pokemon save");

 
});

//route to add User on database
router.post("/signup", singUpController);

router.post("/signin", authController.login);

//route - get private - pokemons data
router.get("/getPokemons", verifyToken, authController.getTrainerPokemons);

module.exports = router;

//function to verify toquen with headers || Middleware
function verifyToken(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).send("Unauthorized Request");
  }
  //header authorization -- value Bearer standar
  //Split the bearer - token and select token
  const token = req.headers.authorization.split(" ")[1];
  if (token === null) {
    return res.status(401).send("Unauthorized Request");
  }

  //get token data
  const payload = jwt.verify(token, config.SECRET_KEY);
  //set token payload to request
  req.trainerId = payload._id;
  console.log(req.trainerId);
  next();
}



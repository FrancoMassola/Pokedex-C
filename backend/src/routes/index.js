const { Router } = require("express");
const router = Router();
const Pokemon = require("../models/Pokemon");
const jwt = require("jsonwebtoken");
const config = require("../data.env");
const authController = require("../controllers/authController");
const singUpController = require("../controllers/signUpController");
const pokemonsController = require("../controllers/pokemonsController");

//all api routes
router.post("/savePokemons", pokemonsController.createPokemon);

//route to add User on database
router.post("/signup", singUpController);

router.post("/signin", authController);

//route to edit pokemon
router.put("/edit/:id", verifyToken, pokemonsController.editPokemon);

//route - get private - pokemons data
router.get("/getPokemons", verifyToken, pokemonsController.getPokemons);

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

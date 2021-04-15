const { Router } = require("express");
const router = Router();
const PokemonTrainer = require("../models/TrainerUser");
const jwt = require("jsonwebtoken");
const config = require("../data.env");
const authController = require("../controllers/authController");
const singUpController = require("../controllers/signUpController");

//all api routes
router.get("/", (req, res) => res.send("Home"));

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

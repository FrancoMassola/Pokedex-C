const { Router } = require("express");
const router = Router();
const PokemonTrainer = require("../models/TrainerUser");
const jwt = require("jsonwebtoken");
const config = require("../data.env");

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
  //create token to send -- payload, secret, options
  const token = jwt.sign({ _id: newUser._id }, config.SECRET_KEY);
  res.status(200).json({ token });
});

//route - login 
router.post('/singin', async (req,res) =>{
    const {username, password} = req.body;
    //If the username exist in db save on const user
    const user = await PokemonTrainer.findOne({username});
    //if user dont exist
    if(!user) return res.status(401).send("The user doesn't exist");
    if(user.password !== password) return res.status(401).send('Wrong password');
    const token = jwt.sign({_id: user._id}, config.SECRET_KEY);
    return res.status(200).json({token});
    

});

//route - get private - pokemons data
router.get("/getPokemons",verifyToken, (req, res) => {
    res.send("Correct");
});

module.exports = router;

//function to verify toquen with headers
function verifyToken (req,res,next){
   
    if(!req.headers.authorization) {
        return res.status(401).send('Unauthorized Request');
    }
    //header authorization -- value Bearer standar
    //Split the bearer - token and select token
    const token = req.headers.authorization.split(' ')[1];
    if(token === null){
        return res.status(401).send('Unauthorized Request');
    }

    //get token data
    const payload = jwt.verify(token, config.SECRET_KEY)
    //set token payload to request
    req.trainerId = payload._id;
    next();
}
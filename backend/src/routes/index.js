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

module.exports = router;

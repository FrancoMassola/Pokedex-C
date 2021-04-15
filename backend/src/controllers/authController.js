const PokemonTrainer = require("../models/TrainerUser");
// const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../data.env");


//user authentication
//req name and password in body
async function login(req, res) {

    const {username, password} = req.body;
    //If the username exist in db save on const user
    const user = await PokemonTrainer.findOne({username});
    //if user dont exist
    if(!user) return res.status(401).send("The user doesn't exist");
    if(user.password !== password) return res.status(401).send('Wrong password');
    const token = jwt.sign({_id: user._id}, config.SECRET_KEY);
    return res.status(200).json({token});
}


async function getTrainerPokemons(req, res) {

    const datas = await PokemonTrainer.find();
    res.send(datas);
}


module.exports = {
    login,
    getTrainerPokemons,
  };
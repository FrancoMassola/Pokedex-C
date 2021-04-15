const mongoose = require("mongoose");
//connect to database
mongoose
  .connect("mongodb://localhost/pokedex", {
    //add mongoose configurations
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  .then((db) => console.log("Database is connected"))
  .catch((err) => console.log(err));

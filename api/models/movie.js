const mongoose = require("mongoose");
const { Schema } = mongoose;


const movieSchema = new Schema({
  name: String, 
  description: String, 
  poster: String,
  duration: Number
},
{ 
  versionKey: false 
});

module.exports = mongoose.model("Movie", movieSchema);

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schemaCelebrity = new Schema({
  name : String ,
  occupation: String,
  catchPhrase: String
});

const Celebrity = mongoose.model('Celebrity', schemaCelebrity);
module.exports = Celebrity;

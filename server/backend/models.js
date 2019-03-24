const mongoose = require('mongoose');
const connectString = 'mongodb://localhost/authors';

mongoose.connect(connectString, {useNewUrlParser:true})
  .catch(err => console.log(err));

const AuthorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50
  }
}, {timestamps:true});

module.exports = mongoose.model('Author', AuthorSchema);

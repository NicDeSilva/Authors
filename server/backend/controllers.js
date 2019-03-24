const Author = require('./models');
// const path = require('path');

module.exports = {

  getAllAuthors: (req, res) => {
    Author.find()
      .then(data => console.log(data) || res.json(data))
      .catch(err => console.log(err) || res.json(err));
  },

  getOneAuthor: (req, res) => {
    const ID = req.params.id;
    Author.findOne({_id:ID})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  createAuthor: (req, res) => {
    const formData = req.body;
    Author.create(formData)
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  updateAuthor: (req, res) => {
    const ID = req.params.id;
    const formData = req.body;
    Author.findOneAndUpdate({_id:ID}, formData, {runValidators:true, new:true})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  deleteAuthor: (req, res) => {
    const ID = req.params.id;
    Author.deleteOne({_id:ID})
      .then(result => res.json(result))
      .catch(errors => res.json(errors));
  }

};
const authorControllers = require('./controllers');
const path = require('path');

module.exports = app => {
  app
    .get('/api/authors', authorControllers.getAllAuthors)
    .get('/api/authors/:id', authorControllers.getOneAuthor)
    .post('/api/authors', authorControllers.createAuthor)
    .put('/api/authors/:id', authorControllers.updateAuthor)
    .delete('/api/authors/:id', authorControllers.deleteAuthor)
    .all("*", (req,res,next) => {
      res.sendFile(path.resolve("../public/dist/public/index.html"))
    });
}
const express = require('express');
const app = express();
const path = require('path');
const {User, syncAndSeed} = require("./db/db");
const bodyParser = require('body-parser')

const port = process.env.PORT || 3000;

app.get('/app.js', (req, res, next)=> res.sendFile(path.join(__dirname, 'dist', 'main.js')));

app.get('/', (req, res, next)=> res.sendFile(path.join(__dirname, 'index.html')));

app.use(bodyParser.json());

app.get('/api/users', (req,res,next) => {
  User.findAll()
      .then(users => res.json(users))
      .catch(next);
});

app.delete('/api/users/:id', (req,res,next) => {
  User.destroy({ where: {id: req.params.id*1}})
      .then(user => res.json(user))
      .catch(next);
});

app.post('/api/users', (req,res,next) => {
  User.create(req.body)
      .then(user => res.json(user))
      .catch(next);
});

app.put('/api/users/:id', (req,res,next) => {
  User.update(
    {
      name: req.body.name,
      bio: req.body.bio,
      rank: req.body.rank,
    },
    {returning: true, where: {id: req.params.id}}
  )
  .then(([rowsUpdate, [updatedUser]]) => {
    res.json(updatedUser)
  })
  .catch(next);
});


syncAndSeed()
  .then(() => {
    app.listen(port, ()=> console.log(`listening on port ${port}`))
  })
  .catch(e => console.log('error syncing: ', e));


const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const User = require('./models/user'); // Asume que tienes un modelo de usuario

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });

const store = new MongoDBStore({
  uri: 'mongodb://localhost:27017/mydatabase',
  collection: 'sessions'
});

app.use(session({
  secret: 'some secret value',
  resave: false,
  saveUninitialized: false,
  store: store
}));

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  User.findOne({ username }, (err, user) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error del servidor');
    } else if (!user) {
      res.status(401).send('Usuario no encontrado');
    } else {
      bcrypt.compare(password, user.password, (err, result) => {
        if (err) {
          console.error(err);
          res.status(500).send('Error del servidor');
        } else if (result) {
          req.session.isLoggedIn = true;
          req.session.user = user;
          return req.session.save(err => {
            console.log(err);
            res.redirect('/');
          });
        } else {
          res.status(401).send('Contraseña incorrecta');
        }
      });
    }
  });
});

window.addEventListener('scroll', function() {
  document.getElementById('loginForm').style.display = "none";
  });

app.listen(3000, () => console.log('Servidor corriendo en http://localhost:3000'));

const express = require('express')
const bcrypt = require('bcrypt');
const cors = require('cors')
const jwt = require('jsonwebtoken')

const users = express.Router()
const User = require('../models/User')
users.use(cors())

process.env.SECRET_KEY = 'secret'


// SignUp
users.post('/register', (req, res) => {
  const today = new Date();

  const userData = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
    created_at: today
  };
  
  User.findOne({
    where: {
      email: req.body.email
    }
  })
    //TODO bcrypt
    .then(user => {
      if (!user) {
        const hash = bcrypt.hashSync(userData.password, 10);
        userData.password = hash;
        User.create(userData)
          .then(user => {
            // let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
            //   expiresIn: 1440
            // })
            res.status(201).json({ message: 'User Created!', user: user })
          })
          .catch(err => {
            res.status(500).json({error: err})
          })
      } else {
        res.json({ error: 'User already exists' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})


// LOGIN
users.post('/login', (req, res, next) => {
  let fetchedUser;
  User.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(user => {
      if (!user) {
        return res.status(401).json({
          message: "Auth failed"
        });
      }
      fetchedUser = user;
      return bcrypt.compare(req.body.password, user.password);
    })
    .then(result => {
      if (!result) {
        return res.status(401).json({
          message: "Auth failed"
        });
      }
      const token = jwt.sign(
        { email: fetchedUser.email, userId: fetchedUser.id },
        process.env.JWT_KEY,
        { expiresIn: "1h" }
      );
      res.status(200).json({
        token: token,
        expiresIn: 3600,
        userId: fetchedUser.id,
        userLastName: fetchedUser.last_name,
        userFirstName: fetchedUser.first_name
      });
    })
    .catch(err => {
      return res.status(401).json({
        message: "Invalid authentication credentials!"
      });
    });
})



users.get('/profile', (req, res) => {
  var decoded = jwt.verify(req.headers['authorization'], process.env.JWT_KEY)

  User.findOne({
    where: {
      id: decoded.id
    }
  })
    .then(user => {
      if (user) {
        res.json(user)
      } else {
        res.send('User does not exist')
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

module.exports = users

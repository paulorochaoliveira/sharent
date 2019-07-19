const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models").User;
const Address = require("../models").Address;

exports.createUser = (req, res, next) => {
     // const today = new Date();
    const userData = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password
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
}

exports.userLogin = (req, res, next) => {
  let fetchedUser;
  
  User.findOne({ 
    where: {
      email: req.body.email 
    }
  })
  .then(user => {
    if (!user) {
      throw new Error('Unable to login');
    }
    fetchedUser = user;
    return bcrypt.compare(req.body.password, user.password);
  })
  .then(result => {
    if (!result) {
      throw new Error('Unable to login');
    }
    console.log(result);
    const token = jwt.sign(
      { email: fetchedUser.email, UserId: fetchedUser.id },
      process.env.JWT_KEY,
      { expiresIn: "1h" }
    );
    res.status(200).json({
      token: token,
      expiresIn: 3600,
      UserId: fetchedUser.id,
      userLastName: fetchedUser.last_name,
      userFirstName: fetchedUser.first_name,
      imagePath: fetchedUser.imagePath
    });
  })
  .catch (err => {
    res.status(401).json({
      message: "Invalid authentication credentials!"
    });
  })
}

exports.getUser = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.JWT_KEY);
    req.userData = { email: decodedToken.email, UserId: decodedToken.UserId };

  User.findOne({
    where: {
      id: req.userData.UserId
    },
    include: [{
      model: Address
    }]
  })
    .then(user => {
      if (user) {
        res.status(200).json({
          message: 'Success',
          user: user
        })
      } else {
        res.status(401).json({
          message: "Invalid authentication credentials!"
        });
      }
    })
    .catch(err => {
      res.status(401).json({
        message: "Invalid authentication credentials!"
      });
    })
}

exports.updateUser = (req, res, next) => {
  let imagePath = req.body.imagePath;
  if (req.file) {
    const url = req.protocol + "://" + req.get("host");
    imagePath = url + "/images/" + req.file.filename;
  }
  const userData = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    imagePath: imagePath
  };
  User.update(userData, {
    where : {
      id: req.body.id
    }})
    .then(result => {
      console.log(result[0]);
      if (result[0] > 0) {
        res.status(200).json({ 
          message: "Update successful!" });
      } else {
        res.status(401).json({ message: "Not authorized!" });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "Couldn't udpate User!"
      });
    });
};

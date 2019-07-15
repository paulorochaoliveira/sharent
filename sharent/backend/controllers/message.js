const Message = require("../models").Message;
const User = require("../models").User;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

exports.createMessage = (req, res, next) => {
  // const url = req.protocol + "://" + req.get("host");
  // const today = new Date();

  const messageData = {
    UserId: req.userData.UserId,
    receiver: req.body.receiver,
    content: req.body.content,
    title: req.body.title
  };
  // console.log(messageData);

  Message
    .create(messageData)
    .then(createdMessage => {
      res.status(201).json({
        message: createdMessage
      });
    })
    .catch(error => {
      res.status(500).json({
        message: messageData, 
        error: error
      });
    });
};

exports.getUsers = (req, res, next) => {
  console.log(req.query.UserId)
  Message.findAll({
    where: {
      receiver: req.query.UserId
    },
    attributes: ['UserId'],
    group: ['UserId'],
    include: [{
      model: User,
      attributes: ['id', 'first_name', 'last_name', 'email', 'imagePath'],
    }]

  })
  .then(result => {
    // console.log(result)
    res.status(200).json({
      users: result
    });
  })
}

exports.getMessages = (req, res, next) => {
  // console.log(req.query)
  Message.findAll({
    where: {
      [Op.or]: [{
        UserId: req.query.UserId, receiver: req.query.receiver
      }, 
      {
        UserId: req.query.receiver, receiver: req.query.UserId
      }]
    },
    include: [{
      model: User,
      attributes: ['id', 'first_name', 'last_name'],
    }]

  })
  .then(result => {
    res.status(200).json({
      messages: result
    });
  })
  // let limit = +req.query.pagesize;   
  // let offset = 0;
  // let count = 0;
  // Message.findAndCountAll()
  //   .then((data) => {
  //     let page = +req.query.page;     
      
  //     count = data.count;
  //     console.log(count);
      
  //     offset = limit * (page - 1);
  //     Message.findAll({
        
  //       limit: limit,
  //       offset: offset,
  //       $sort: { id: 1 }
  //     })
  //     .then((fetchedMessages) => {
  //       res.status(200).json({
  //         messages: fetchedMessages, 
  //         maxMessages: count
  //       });
  //     });
  // })
  // .catch(function (error) {});
};

exports.getMessage = (req, res, next) => {
  Message.findByPk(req.params.id)
    .then(message => {
      if (message) {
        res.status(200).json(message);
      } 
    })
    .catch(error => {});
};


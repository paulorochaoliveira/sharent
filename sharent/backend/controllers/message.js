const Message = require("../models/message");

exports.createMessage = (req, res, next) => {
  const url = req.protocol + "://" + req.get("host");
  const today = new Date();

  const messageData = {
    userId: req.userData.userId,
    content: req.body.content,
    title: req.body.title,
    isRead: req.body.isRead,
    created_at: today
  };
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

exports.getMessages = (req, res, next) => {
  let limit = +req.query.pagesize;   
  let offset = 0;
  let count = 0;
  Message.findAndCountAll()
    .then((data) => {
      let page = +req.query.page;     
      
      count = data.count;
      console.log(count);
      
      offset = limit * (page - 1);
      Message.findAll({
        
        limit: limit,
        offset: offset,
        $sort: { id: 1 }
      })
      .then((fetchedMessages) => {
        res.status(200).json({
          messages: fetchedMessages, 
          maxMessages: count
        });
      });
  })
  .catch(function (error) {});
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


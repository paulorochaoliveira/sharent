'use strict';
module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    isRead: DataTypes.CHAR
  }, {});
  Message.associate = function(models) {
    // Message belongs to a User
    Message.belongsTo(models.User);
  };
  return Message;
};
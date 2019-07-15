'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    imagePath: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // User has many products
    User.hasMany(models.Product);
    User.hasMany(models.Message);

  };
  return User;
};
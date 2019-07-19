'use strict';
module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define('Address', {
    civicNumber: DataTypes.INTEGER,
    streetName: DataTypes.STRING,
    apto: DataTypes.STRING,
    city: DataTypes.STRING,
    province: DataTypes.STRING,
    postalCode: DataTypes.STRING,
    latitude: DataTypes.STRING,
    longitude: DataTypes.STRING
  }, {});
  Address.associate = function(models) {
    Address.belongsTo(models.User);
  };
  return Address;
};
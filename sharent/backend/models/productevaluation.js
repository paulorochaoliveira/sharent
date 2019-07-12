'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProductEvaluation = sequelize.define('ProductEvaluation', {
    
    rate: DataTypes.INTEGER,
    evaluation: DataTypes.STRING,
    ProductId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER

  }, {});
  ProductEvaluation.associate = function(models) {
    
    ProductEvaluation.belongsTo(models.Product);    
  
    ProductEvaluation.belongsTo(models.User);
  };
  return ProductEvaluation;
};
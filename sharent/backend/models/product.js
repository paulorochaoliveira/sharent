'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    product_name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    imagePath: DataTypes.STRING
  }, {});
  Product.associate = function(models) {
    // Product belongs to one User
    Product.belongsTo(models.User);
    Product.hasMany(models.ProductEvaluation);
  };
  return Product;
};
'use strict';
module.exports = function(sequelize, DataTypes) {
  var cadmin_ad_point = sequelize.define('cadmin_ad_point', {
    point: DataTypes.INTEGER,
    pay_per_case: DataTypes.INTEGER,
    day_amount: DataTypes.INTEGER,
    total_amount: DataTypes.INTEGER,
    total_expenditure: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return cadmin_ad_point;
};
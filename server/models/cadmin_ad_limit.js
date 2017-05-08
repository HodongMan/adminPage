'use strict';
module.exports = function(sequelize, DataTypes) {
  var cadmin_ad_limit = sequelize.define('cadmin_ad_limit', {
    total_amount: DataTypes.INTEGER,
    amount_per_day: DataTypes.INTEGER,
    time: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return cadmin_ad_limit;
};
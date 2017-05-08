'use strict';
module.exports = function(sequelize, DataTypes) {
  var cadmin_ad = sequelize.define('cadmin_ad', {
    user_email: DataTypes.STRING,
    weight: DataTypes.INTEGER,
    open: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return cadmin_ad;
};
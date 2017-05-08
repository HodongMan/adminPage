'use strict';
module.exports = function(sequelize, DataTypes) {
  var cadmin_ad_target = sequelize.define('cadmin_ad_target', {
    gender: DataTypes.STRING,
    age: DataTypes.INTEGER,
    location: DataTypes.STRING,
    interest: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return cadmin_ad_target;
};
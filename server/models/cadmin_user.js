'use strict';
module.exports = function(sequelize, DataTypes) {
  var cadmin_user = sequelize.define('cadmin_user', {
    email: DataTypes.STRING,
    name: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return cadmin_user;
};
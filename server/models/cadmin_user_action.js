'use strict';
module.exports = function(sequelize, DataTypes) {
  var cadmin_user_action = sequelize.define('cadmin_user_action', {
    content: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return cadmin_user_action;
};
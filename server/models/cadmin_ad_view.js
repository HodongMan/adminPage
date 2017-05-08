'use strict';
module.exports = function(sequelize, DataTypes) {
  var cadmin_ad_view = sequelize.define('cadmin_ad_view', {
    user_code: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return cadmin_ad_view;
};
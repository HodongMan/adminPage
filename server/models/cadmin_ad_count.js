'use strict';
module.exports = function(sequelize, DataTypes) {
  var cadmin_ad_count = sequelize.define('cadmin_ad_count', {
    view: DataTypes.INTEGER,
    click: DataTypes.INTEGER,
    install: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return cadmin_ad_count;
};
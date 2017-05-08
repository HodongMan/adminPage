'use strict';
module.exports = function(sequelize, DataTypes) {
  var cadmin_ad_detail = sequelize.define('cadmin_ad_detail', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    img: DataTypes.STRING,
    page_link: DataTypes.STRING,
    type: DataTypes.STRING,
    weight: DataTypes.STRING,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return cadmin_ad_detail;
};
'use strict';
module.exports = (sequelize, DataTypes) => {
    const cadmin_ad_detail = sequelize.define('cadmin_ad_detail', {

        title : {
            type : DataTypes.STRING,
            allowNull : false,
        },
        content : {
            type : DataTypes.STRING,
            allowNull : false,
        },
        img : {
            type : DataTypes.STRING,
            allowNull : true,
        },
        page_link : {
            type : DataTypes.STRING,
            allowNull : true,
        },
        type : {
            type : DataTypes.STRING,
            allowNull : false,
        },
        weight : {
            type : DataTypes.STRING,
            allowNull : false,
        },
        start_date : {
            type : DataTypes.STRING,
            allowNull : true,
        },
        end_date : {
            type : DataTypes.STRING,
            allowNull : true,
        },
    }, {
        classMethods: {
            associate: (models) => {
                cadmin_ad_detail.belongTo(models.cadmin_ad, {
                    foreignKey : 'ad_id',
                    onDelete : 'CASCADE',
                });
            },
        },
    });
    return cadmin_ad_detail;
};

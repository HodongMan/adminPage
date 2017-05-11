'use strict';
module.exports = (sequelize, DataTypes) => {
    const cadmin_ad_detail = sequelize.define('cadmin_ad_detail', {

        title : {
            type : DataTypes.STRING,
            allowNull : false,
        },
        content : {
            type : DataTypes.TEXT,
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
            type : DataTypes.INTEGER,
            allowNull : false,
        },
        start_date : {
            type : DataTypes.DATE,
            allowNull : true,
        },
        end_date : {
            type : DataTypes.DATE,
            allowNull : true,
        },
    }, {
        classMethods: {
            associate: (models) => {
                cadmin_ad_detail.belongsTo(models.cadmin_ad, {
                    foreignKey : 'ad_id',
                    onDelete : 'CASCADE',
                });
            },
        },
    });
    return cadmin_ad_detail;
};

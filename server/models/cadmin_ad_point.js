'use strict';

module.exports = (sequelize, DataTypes) => {

    const cadmin_ad_point = sequelize.define('cadmin_ad_point', {

        point : {
            type : DataTypes.INTEGER,
            allowNull : false,
        },
        pay_per_case : {
            type : DataTypes.INTEGER,
            allowNull : false,
        },
        day_amount : {
            type : DataTypes.INTEGER,
            allowNull : true,
        },
        total_amount : {
            type : DataTypes.INTEGER,
            allowNull : false,
        },
        total_expenditure : {
            type : DataTypes.INTEGER,
            allowNull : false,
        },
    }, {
        classMethods: {
            associate: (models) => {
                cadmin_ad_point.belongsTo(models.cadmin_ad, {
                    foreignKey : 'ad_id',
                    onDelete : 'CASCADE',
                });
            },
        },
    });
    return cadmin_ad_point;
};

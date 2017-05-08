'use strict';

module.exports = (sequelize, DataTypes) => {

    const cadmin_ad_limit = sequelize.define('cadmin_ad_limit', {

        total_amount : {
            type : DataTypes.INTEGER,
            allowNull : false,
        },
        amount_per_day : {
            type : DataTypes.INTEGER,
            allowNull : false,
        },
        time : {
            type : DataTypes.INTEGER,
            allowNull : false,
        },
    }, {
        classMethods: {
            associate: (models) => {
                cadmin_ad_limit.belongTo(models.cadmin_ad, {
                    foreignKey : 'ad_id',
                    onDelete : 'CASCADE'.
                });
            },
        },
    });
    return cadmin_ad_limit;
};

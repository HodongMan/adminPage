'use strict';

module.exports = (sequelize, DataTypes) => {
    const cadmin_ad_view = sequelize.define('cadmin_ad_view', {
        user_code : {
            type : DataTypes.STRING,
            allowNull : false,
        }
    }, {
        classMethods: {
            associate: (models) => {
                cadmin_ad_target.belongTo(models.cadmin_ad, {
                    foreignKey : 'ad_id',
                    onDelete : 'CASCADE'.
                });
            },
        },
    });
    return cadmin_ad_view;
};

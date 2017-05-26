'use strict';

module.exports = (sequelize, DataTypes) => {

    const cadmin_ad_count = sequelize.define('cadmin_ad_count', {

        view : {
            type : DataTypes.INTEGER,
            allowNull : false,
        },
        click : {
            type : DataTypes.INTEGER,
            allowNull : false,
        },
        install : {
            type : DataTypes.INTEGER,
            allowNull : false,
        }
    }, {
        classMethods: {
            associate: (models) => {
                cadmin_ad_count.belongsTo(models.cadmin_ad, {
                    foreignKey : 'ad_id',
                    onDelete : 'CASCADE',
                });
            },
        },
    });
    return cadmin_ad_count;cd
};

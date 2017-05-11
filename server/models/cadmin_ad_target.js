'use strict';

module.exports = function(sequelize, DataTypes) {

    const cadmin_ad_target = sequelize.define('cadmin_ad_target', {

        gender : {
            type : DataTypes.STRING,
            allowNull : false,
        },
        age : {
            type : DataTypes.INTEGER,
            allowNull : false,
        },
        location : {
            type : DataTypes.STRING,
            allowNull : false,
        },
        interest : {
            type : DataTypes.STRING,
            allowNUll : false,
        }
    }, {
        classMethods: {
            associate: (models) => {
                cadmin_ad_target.belongsTo(models.cadmin_ad, {
                    foreignKey : 'ad_id',
                    onDelete : 'CASCADE',
                });
            },
        },
    });
    return cadmin_ad_target;
};

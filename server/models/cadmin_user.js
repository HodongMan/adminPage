'use strict';

module.exports = (sequelize, DataTypes) => {

    const cadmin_user = sequelize.define('cadmin_user', {

        email : {
            type : DataTypes.STRING,
            allowNull : false,
        },
        name : {
            type : DataTypes.STRING,
            allowNull : false,
        },
        password : {
            type : DataTypes.STRING,
            allowNull : false,
        }
    }, {
        classMethods: {
            associate: (models) => {
                cadmin_user.hasMany(models.cadmin_ad, {
                    foreignKey : 'user_email',
                    as : 'cadmin_ads',
                })
            },
        },
    });
    return cadmin_user;
};

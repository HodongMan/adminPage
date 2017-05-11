'use strict';

module.exports = (sequelize, DataTypes) => {

    const cadmin_ad = sequelize.define('cadmin_ad', {

        weight : {
            type : DataTypes.INTEGER,
            allowNull : false,
        },
        open : {
            type : DataTypes.INTEGER,
            allowNull : false,
        }
    }, {
        classMethods: {
            associate: (models) => {
                cadmin_ad.belongsTo(models.cadmin_user, {
                    foreignKey : 'user_email',
                    onDelete : 'CASCADE',
                });

                cadmin_ad.hasMany(models.cadmin_ad_count, {
                    foreignKey : 'ad_id',
                    onDelete : 'CASCADE',
                });

                cadmin_ad.hasMany(models.cadmin_ad_detail, {
                    foreignKey : 'ad_id',
                    onDelete : 'CASCADE',
                });

                cadmin_ad.hasMany(models.cadmin_ad_limit, {
                    foreignKey : 'ad_id',
                    onDelete : 'CASCADE',
                });

                cadmin_ad.hasMany(models.cadmin_ad_point, {
                    foreignKey : 'ad_id',
                    onDelete : 'CASCADE',
                });

                cadmin_ad.hasMany(models.cadmin_ad_target, {
                    foreignKey : 'ad_id',
                    onDelete : 'CASCADE',
                });

                cadmin_ad.hasMany(models.cadmin_ad_target, {
                    foreignKey : 'ad_id',
                    onDelete : 'CASCADE',
                });

                cadmin_ad.hasMany(models.cadmin_ad_view, {
                    foreignKey : 'ad_id',
                    onDelete : 'CASCADE',
                });
            },
        },
    });
    return cadmin_ad;
};

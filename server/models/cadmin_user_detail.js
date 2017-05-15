'use strict';

module.exports = (sequelize, DataTypes) => {

    const cadmin_user_detail = sequelize.define('cadmin_user_detail', {

        company : {
            type : DataTypes.STRING,
            allowNull : false,
        },
        registration : {
            type : DataTypes.STRING,
            allowNull : false,
        },
        number : {
            type : DataTypes.STRING,
            allowNull : false,
        },

        phone : {
            type : DataTypes.STRING,
            allowNull : false,
        },
        category : {
            type : DataTypes.STRING,
            allowNull : true,
        },
        email : {
            type : DataTypes.STRING,
            allowNull : true,
        }

    }, {
        classMethods : {
            associate : (models) => {

                cadmin_user_detail.belongsTo(models.cadmin_user, {
                    foreignKey : 'user_email',
                    onDelete : 'CASCADE',
                });
            }
        }
    });
    return cadmin_user_detail;
};

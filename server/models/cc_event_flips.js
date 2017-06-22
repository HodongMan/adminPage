'use strict';

module.exports = (sequelize, DataTypes) => {

    const cc_event_flips = sequelize.define('cc_event_flips', {
        start_date : {
            type : DataTypes.DATE,
            allowNull : false,
        },
        end_date : {
            type : DataTypes.DATE,
            allowNull : false,
        },
        point : {
            type : DataTypes.INTEGER,
            defaultValue : 0,
        },
        count : {
            type : DataTypes.INTEGER,
            defaultValue : 0,
        },

        enable_count : {
            type : DataTypes.INTEGER,
            defaultValue : 0,
        },
    }, {
        classMethods : {
            associate : (models) => {
                cc_event_flips.belongsTo(models.cc_events, {
                    foreignKey : 'event_id',
                    onDelete : 'CASCADE',
                });
            },
        },
    });

    return cc_event_flips;
};

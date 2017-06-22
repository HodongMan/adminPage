'use strict';

module.exports = (sequelize, DataTypes) => {

    const cc_events = sequelize.define('cc_events', {
        type : {
            type : DataTypes.STRING,
            allowNull : false,
        },
        user_code : {
            type : DataTypes.STRING,
            allowNull : false,
        },
    }, {
        classMethods : {
            associate : (models) => {
                cc_events.hasMany(models.cc_event_flips, {
                    foreignKey : 'event_id',
                    onDelete : 'CASCADE',
                });
            },
        },
    });
    return cc_events;
};

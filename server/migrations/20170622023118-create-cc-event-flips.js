'use strict';

module.exports = {

    up : (queryInterface, Sequelize) => {

        return queryInterface.createTable('cc_event_flips', {

            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            start_date: {
                type: Sequelize.DATE,
                defaultValue : '1992-06-13',
            },
            end_date: {
                type: Sequelize.DATE,
                defaultValue : '1992-06-13',
            },
            point: {
                type: Sequelize.INTEGER,
                defaultValue : 0,
            },
            count: {
                type: Sequelize.INTEGER,
                defaultValue : 0,
            },
            enable_count: {
                type: Sequelize.INTEGER,
                defaultValue : 0,
            },
            event_id : {
                type : Sequelize.INTEGER,
                onDelete : 'CASCADE',
                references : {
                    model : 'cc_events',
                    key : 'id',
                    as : 'event_id',
                }
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
        });
    },
    down : (queryInterface, Sequelize) => {
        return queryInterface.dropTable('cc_event_flips');
    }
};

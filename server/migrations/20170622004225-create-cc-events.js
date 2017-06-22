'use strict';

module.exports = {

    up : (queryInterface, Sequelize) => {

        return queryInterface.createTable('cc_events', {
            id : {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            type: {
                type: Sequelize.STRING,
                allowNull : false,
            },
            user_code: {
                type: Sequelize.STRING,
                allowNull : false,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down : (queryInterface, Sequelize) => {
        return queryInterface.dropTable('cc_events');
    }
};

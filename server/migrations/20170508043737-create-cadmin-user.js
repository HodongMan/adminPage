'use strict';
module.exports = {
    up : (queryInterface, Sequelize) => {
        return queryInterface.createTable('cadmin_users', {

            email: {
                type: Sequelize.STRING,
                allowNull : false,
                primaryKey : true,
            },
            name: {
                type: Sequelize.STRING,
                allowNull : false,
            },
            password: {
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
            },
        });
    },
    down : (queryInterface, Sequelize) => {
        return queryInterface.dropTable('cadmin_users');
    }
};

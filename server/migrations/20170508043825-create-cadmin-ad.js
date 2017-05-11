'use strict';

module.exports = {
    up : (queryInterface, Sequelize) => {
        return queryInterface.createTable('cadmin_ads', {

            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            weight: {
                type: Sequelize.INTEGER
            },
            open: {
                type: Sequelize.INTEGER
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            },

            user_email : {
                type : Sequelize.STRING,
                onDelete : 'CASCADE',
                references : {
                    model : "cadmin_users",
                    key : "email",
                    as : "user_email",
                },
            },

        });
    },

    down : (queryInterface, Sequelize) => {
        return queryInterface.dropTable('cadmin_ads');
    }
};

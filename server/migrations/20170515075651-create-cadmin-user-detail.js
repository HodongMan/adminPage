'use strict';

module.exports = {

    up : (queryInterface, Sequelize) => {
        return queryInterface.createTable('cadmin_user_details', {

            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            company: {
                allowNull : false,
                type: Sequelize.STRING
            },
            registration: {
                allowNull : false,
                type: Sequelize.STRING
            },
            number: {
                allowNull : false,
                type: Sequelize.STRING
            },
            phone: {
                allowNull : false,
                type: Sequelize.STRING
            },
            category: {
                allowNull : true,
                type: Sequelize.STRING
            },
            email: {
                allowNull : true,
                type: Sequelize.STRING
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
        return queryInterface.dropTable('cadmin_user_details');
    }
};

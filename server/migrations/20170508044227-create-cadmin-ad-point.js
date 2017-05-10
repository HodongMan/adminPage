'use strict';
module.exports = {
    up : (queryInterface, Sequelize) => {
        return queryInterface.createTable('cadmin_ad_points', {

            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            point: {
                type: Sequelize.INTEGER,
                allowNull : false,
            },
            pay_per_case: {
                type: Sequelize.INTEGER,
                allowNull : false,
            },
            day_amount: {
                type: Sequelize.INTEGER,
                allowNull : true,
            },
            total_amount: {
                type: Sequelize.INTEGER,
                allowNull : false,
            },
            total_expenditure: {
                type: Sequelize.INTEGER,
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
            ad_id : {
                type : Sequelize.INTEGER,
                onDelete : 'CASCADE',
                references : {
                    model : 'cadmin_ads',
                    key : 'id',
                    as : 'ad_id',
                }
            },
        });
    },
    down : (queryInterface, Sequelize) => {
        return queryInterface.dropTable('cadmin_ad_points');
    }
};

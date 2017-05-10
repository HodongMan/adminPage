'use strict';

module.exports = {
    up : (queryInterface, Sequelize) => {
        return queryInterface.createTable('cadmin_ad_limits', {

            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            total_amount: {
                type: Sequelize.INTEGER,
                allowNull : false,
            },
            amount_per_day: {
                type: Sequelize.INTEGER,
                allowNull : false,
            },
            time: {
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
        return queryInterface.dropTable('cadmin_ad_limits');
    }
};

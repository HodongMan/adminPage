'use strict';
module.exports = {
    up : (queryInterface, Sequelize) => {
        return queryInterface.createTable('cadmin_ad_counts', {

            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            view: {
                type: Sequelize.INTEGER,
                allowNull : false,
            },
            click: {
                type: Sequelize.INTEGER,
                allowNull : false,
            },
            install: {
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
        return queryInterface.dropTable('cadmin_ad_counts');
    }
};

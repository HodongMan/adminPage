'use strict';

module.exports = {
    up : (queryInterface, Sequelize) => {
        return queryInterface.createTable('cadmin_ad_details', {

            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            title: {
                type: Sequelize.STRING,
                allowNull : false,
            },
            content: {
                type: Sequelize.TEXT,
                allowNull : false,
            },
            img: {
                type: Sequelize.STRING,
                allowNull : true,
            },
            page_link: {
                type: Sequelize.STRING,
                allowNull : true,
            },
            type: {
                type: Sequelize.STRING,
                allowNull : false,
            },
            weight: {
                type: Sequelize.STRING,
                allowNull : false,
            },
            start_date: {
                type: Sequelize.DATE,
                allowNull : true,
            },
            end_date: {
                type: Sequelize.DATE,
                allowNull : true,
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
        return queryInterface.dropTable('cadmin_ad_details');
    }
};

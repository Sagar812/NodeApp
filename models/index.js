const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'my_project',
    'postgres',
    'sagar',
    {
        host: 'localhost',
        port: '5432',
        dialect: 'postgres',
        operatorsAliases: false,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000,
        },
        timezone: '+05.30', 
    },
);

const UserModel = require('./user');

const models = {
    User: UserModel.init(sequelize, Sequelize),
};

Object.values(models)
    .filter(model => typeof model.associate === 'function')
    .forEach(model => model.associate(models));

const db = {
    ...models,
    sequelize,
}

module.exports = db;
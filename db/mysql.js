const dbConfig = require("../config/dbConfig");
const { Sequelize } = require("sequelize");

const db = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.DIALECT,
});

module.exports = db;

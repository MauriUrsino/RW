const Sequelize = require("sequelize");

const config = require("../config/envs");

const sequelize = new Sequelize(config.DB_HOST, "postgres", "1234", {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

module.exports = sequelize;

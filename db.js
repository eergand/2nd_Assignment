const { Sequelize } = require("sequelize"); //import the sequelize library
const path = require("path");

const storage =  path.join(__dirname, "db.sqlite");

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage,
});

module.exports = sequelize;
const sequelize = require("./db");
const Company = require("./companies");
const Menu = require("./menus");
const Location = require("./locations");

async function setupDb() {
   Menu.hasMany(Company);
   Company.hasMany(Location);
   Location.belongsTo(Company);
   Company.belongsTo(Menu);

    await sequelize.sync();
};

module.exports = setupDb;
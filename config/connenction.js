var Sequelize = require("sequelize");

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize("example_db", "root", "mySQL", {
    host: "localhost",
    dialect: "mysql"
  });
}

// Exports the connection for other files to use
module.exports = sequelize;

"use strict";

const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];

const Companyuser_Info = require("./join.js");
const Recruit = require("./recruit.js");

const db = { Companyuser_Info, Recruit };

let sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

Companyuser_Info.init(sequelize);
Recruit.init(sequelize);

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

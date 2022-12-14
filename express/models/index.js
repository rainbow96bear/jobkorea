"use strict";

const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];

const Companyuser_Info = require("./join.js");
const Recruit = require("./recruit.js");
const Individualuser_Info = require("./userJoin.js");
const PersonalRecruit = require("./personal.js");

const db = { Companyuser_Info, Individualuser_Info, Recruit, PersonalRecruit };

let sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

Companyuser_Info.init(sequelize);
Recruit.init(sequelize);
Individualuser_Info.init(sequelize);
PersonalRecruit.init(sequelize);

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

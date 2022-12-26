const Sequelize = require("sequelize");

module.exports = class Companyuser_Info extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        selectedOption: {
          type: Sequelize.STRING(255),
        },
        companyNumber: {
          type: Sequelize.STRING(255),
        },
        companyName: {
          type: Sequelize.STRING(255),
        },
        companyHeader: {
          type: Sequelize.STRING(255),
        },
        companyAddress: {
          type: Sequelize.TEXT,
        },
        companyId: {
          type: Sequelize.STRING(255),
          unique: true,
        },
        companyPw: {
          type: Sequelize.STRING(255),
        },
        companyIdname: {
          type: Sequelize.STRING(255),
        },
        companyIdnumber: {
          type: Sequelize.STRING(255),
        },
        companyIdemail: {
          type: Sequelize.STRING(255),
        },
        companylogo: {
          type: Sequelize.STRING(255),
          allowNull: true,
        },
        companyMoney: {
          type: Sequelize.STRING(255),
        },
      },
      {
        sequelize,
        modelName: "Companyuser_Info",
        tableName: "CompanyuserInfo",
        timestamps: true,
        paranoid: true,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }

  static associate(db) {
    db.Companyuser_Info.hasMany(db.Recruit, {
      as: "RecruitMaker",
      sourceKey: "companyId",
      foreignKey: "company",
    });
  }
};

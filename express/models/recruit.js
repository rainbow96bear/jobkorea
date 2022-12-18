const Sequelize = require("sequelize");

module.exports = class Recruit extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        recruitName: {
          type: Sequelize.STRING(255),
          unique: true,
        },
        recruitNum: {
          type: Sequelize.STRING(255),
        },
        isExp: {
          type: Sequelize.STRING(255),
        },
        myTask: {
          type: Sequelize.STRING(255),
        },
        workDepartment: {
          type: Sequelize.STRING(255),
        },
        workRank: {
          type: Sequelize.STRING(255),
        },
        condition: {
          type: Sequelize.STRING(255),
        },
        edu: {
          type: Sequelize.STRING(255),
        },
        area: {
          type: Sequelize.STRING(255),
        },
        shape: {
          type: Sequelize.STRING(255),
        },
        isPay: {
          type: Sequelize.STRING(255),
        },
        minPay: {
          type: Sequelize.STRING(255),
        },
        maxPay: {
          type: Sequelize.STRING(255),
        },
      },
      {
        sequelize,
        modelName: "Recruit",
        tableName: "recruit",
        timestamps: true,
        paranoid: true,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }

  static associate(db) {
    db.Recruit.belongsTo(db.Companyuser_Info, {
      // as: "RecruitMaker",
      targetKey: "companyId",
      foreignKey: "company",
    });

    db.Recruit.belongsToMany(db.Individual_Info, {
      through: "personalRecruit",
      as: "RecruitInfo",
      foreignKey: "recruitName",
      sourceKey: "recruitName",
      onDelete: "cascade",
    });
  }
};

const Sequelize = require("sequelize");

module.exports = class Recruit extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        recruitArea: {
          type: Sequelize.STRING(255),
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
};

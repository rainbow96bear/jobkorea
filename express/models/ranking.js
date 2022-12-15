const Sequelize = require("sequelize");

module.exports = class Ranking_Info extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        individualName: {
          type: Sequelize.STRING(255),
        },
      },
      {
        sequelize,
        modelName: "Individualuser_Info",
        tableName: "IndividualuserInfo",
        timestamps: true,
        paranoid: true,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }
};

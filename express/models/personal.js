const Sequelize = require("sequelize");

module.exports = class personalRecruit extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        check: {
          type: Sequelize.STRING(255),
        },
      },
      {
        sequelize,
        modelName: "personalRecruit",
        tableName: "personalRecruit",
        timestamps: true,
        // paranoid: true,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }
};

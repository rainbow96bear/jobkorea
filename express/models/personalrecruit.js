const Sequelize = require("sequelize");

module.exports = class Personalrecruit extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        individualId: {
          type: Sequelize.STRING(255),
          unique: true,
        },
        recruitId: {
          type: Sequelize.STRING(255),
          unique: true,
        },
      },
      {
        sequelize,
        modelName: "Personalrecruit",
        tableName: "personalrecruit",
        timestamps: true,
        paranoid: true,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }
  static associate(db) {
    db.Individualuser_Info.belongsToMany(db.Recruit, {
      through: "personalRecruit",
      as: "IndividualInfo",
      foreignKey: "individualId",
      sourceKey: "individualId",
      onDelete: "cascade",
    });

    db.Recruit.belongsToMany(db.Individualuser_Info, {
      through: "personalRecruit",
      as: "RecruitInfo",
      foreignKey: "recruitId",
      sourceKey: "id",
      onDelete: "cascade",
    });
  }
};

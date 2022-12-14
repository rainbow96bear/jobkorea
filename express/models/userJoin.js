const Sequelize = require("sequelize");

module.exports = class Individual_Info extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        individualPhoto: {
          type: Sequelize.STRING(255),
          allowNull: true,
        },
        individualName: {
          type: Sequelize.STRING(255),
        },
        individualId: {
          type: Sequelize.STRING(255),
          unique: true,
        },
        individualPw: {
          type: Sequelize.STRING(255),
        },
        individualEmail: {
          type: Sequelize.STRING(255),
        },
        individualTel: {
          type: Sequelize.STRING(255),
        },
        individualInfoValid: {
          type: Sequelize.STRING(255),
        },
        individualAddress: {
          type: Sequelize.TEXT,
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
  static associate(db) {
    db.Individualuser_Info.belongsToMany(db.Recruit, {
      through: "personalRecruit",
      as: "IndividualInfo",
      foreignKey: "individualId",
      sourceKey: "individualId",
      onDelete: "CASCADE",
    });
  }
};

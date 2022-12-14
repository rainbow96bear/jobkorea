const Sequelize = require("sequelize");

module.exports = class Individual_Info extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        individualName: {
          type: Sequelize.STRING(255),
        },
        individualId: {
          type: Sequelize.STRING(255),
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
        // individualInfoValid: {
        //   type: Sequelize.STRING(255),
        //   unique: true,
        // },
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

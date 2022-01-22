const { Sequelize } = require("sequelize");

const { db } = require("../utils/config");
const UserModel = require("../models/User");
class Database {
  static _instance = null;

  constructor() {}

  static async getModels() {
    if (!Database._instance) {
      Database._instance = new Sequelize({ ...db });

      UserModel.setup(Database._instance);

      await Database._instance.sync();
    }

    return UserModel;
  }
}

module.exports = Database;

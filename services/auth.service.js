const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Database = require("../lib/Database");
const { api } = require("../utils/config");

class AuthService {
  static _authServiceInstance = null;
  constructor() {}

  async getModels() {
    const { UserModel } = await Database.getModels();
    this._userModel = UserModel;
  }

  static async getInstance() {
    if (!AuthService._authServiceInstance) {
      AuthService._authServiceInstance = new AuthService();
      await AuthService._authServiceInstance.getModels();
    }
    return AuthService._authServiceInstance;
  }

  async createUser(email, password) {}
}

module.exports = AuthService;

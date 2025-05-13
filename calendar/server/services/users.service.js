const UsersModel = require('../models/users.model');
const SqlInjection = require('../utils/security.utile');
class UsersService {
  static async getAll() {
    let rows = await UsersModel.getAll();
    rows.forEach(obj => {
      Object.values(obj).forEach(val => {
        if (typeof val == '') val = SqlInjection.stripSlashes(val);
      });
    });
    return rows;
  }
  static async findUserById(values) {
    let rows = await UsersModel.findUserById(values);
    rows.forEach(obj => {
      Object.values(obj).forEach(val => {
        if (typeof val == '') val = SqlInjection.stripSlashes(val);
      });
    });
    return rows;
  }
  static async addUser(values) {
    values = !Array.isArray(values) ? [values] : values;
    for (let val of values) {
      if (typeof val == '') val = SqlInjection.addSlashes(val);
    }
    let rows = await UsersModel.addUser(values);
    return rows.affectedRows;
  }
  static async deleteUser(values) {
    values = !Array.isArray(values) ? [values] : values;
    let rows = await UsersModel.deleteUser(values);
    return rows.affectedRows;
  }
  static async updateUser(values) {
    values = !Array.isArray(values) ? [values] : values;
    for (let val of values) {
      if (typeof val == '') val = SqlInjection.addSlashes(val);
    }
    let rows = await UsersModel.updateUser(values);
    return rows.affectedRows;
  }
}

module.exports = UsersService;

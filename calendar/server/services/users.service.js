const DetailedError = require('../errors/detailedError.errors');
const {BED_REQUEST} =require('../errors/errorCodes')
const UsersModel = require('../models/users.model');
class UsersService {
  static async getAll() {
    let rows = await UsersModel.getAll();
    return rows;
  }
  static async findUserById(values) {
    let rows = await UsersModel.findUserById(values);
    return rows;
  }
  static async addUser(values) {
    values.map(val => {
      if (!val)
        throw new DetailedError("INVALID PARAMETERS", BED_REQUEST);
    })
    values = !Array.isArray(values) ? [values] : values;
    console.log(values);
    
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
    let rows = await UsersModel.updateUser(values);
    return rows.affectedRows;
  }
}

module.exports = UsersService;

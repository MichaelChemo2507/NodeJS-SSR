const connection = require('../configuration/db');

class Users {
  static async getAll() {
    const sql = 'SELECT * FROM `users`';
    const [rows, fields] = await connection.pool.query({
      sql,
    });
    return rows;
  }
  static async findUserById(values) {
    values = !Array.isArray(values) ? [values] : values;
    const sql = 'SELECT * FROM `users` WHERE `id` = ?';
    const [rows, fields] = await connection.pool.execute(sql, values);
    return rows;
  }
  static async addUser(values) {
    values = !Array.isArray(values) ? [values] : values;
    const sql =
      'INSERT INTO `users`(`name`,`user_level`,`user_name`,`password`,`email`) VALUES (?,?,?,?,?)';
    const [rows, fields] = await connection.pool.execute(sql, values);
    return rows;
  }
  static async addMultipleUsers(values) {}
  static async deleteUser(values) {
    values = !Array.isArray(values) ? [values] : values;
    const sql = 'DELETE FROM `users` WHERE `id` = ?';
    const [rows, fields] = await connection.pool.execute(sql, values);
    return rows;
  }
  static async updateUser(values) {
    values = !Array.isArray(values) ? [values] : values;
    const sql =
      'UPDATE `users` SET `name` = ?,`user_level` = ?,`user_name` = ?,`password` = ?,`email` = ? WHERE `ID` = ?';
    const [rows, fields] = await connection.pool.execute(sql, values);
    return rows;
  }
}
module.exports = Users;

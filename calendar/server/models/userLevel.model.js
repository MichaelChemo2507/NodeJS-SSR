const connection = require('../configuration/db');

class UserLevel {
  static async getAll() {
    const sql = 'SELECT * FROM `user_lavel` ';
    const [rows, fields] = await connection.pool.query({
      sql,
    });
    return rows;
  }
}
module.exports = UserLevel;

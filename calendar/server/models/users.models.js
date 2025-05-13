const connection = require('../configuration/db');

class Courses {
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
    const sql = 'INSERT INTO `users`(`name`,`user_level`,`user_name`,`password`,`email`) VALUES (?,?,?,?,?)';
    const [rows, fields] = await connection.pool.execute(sql, values);
    return rows;
  }
  static async addMultipleUsers(values) {}
  static async deleteCourse(values) {
    values = !Array.isArray(values) ? [values] : values;
    const sql = 'DELETE FROM `courses` WHERE `id` = ?';
    const [rows, fields] = await connection.pool.execute(sql, values);
    return rows;
  }
  static async updateCourse(values) {
    values = !Array.isArray(values) ? [values] : values;
    const sql = 'UPDATE `courses` SET `name` = ? WHERE `id` = ?';
    const [rows, fields] = await connection.pool.execute(sql, values);
    return rows;
  }
}
module.exports = Courses;

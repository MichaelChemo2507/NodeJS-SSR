const connection = require('../configuration/db');

class Courses {
  static async getAll() {
    const sql = 'SELECT * FROM `courses`';
    const [rows, fields] = await connection.pool.query({
      sql,
    });
    return rows;
  }
  static async findCourseById(values) {
    values = (!Array.isArray(values)) ? [values] : values;
    const sql = 'SELECT * FROM `courses` WHERE `id` = ?';
    const [rows, fields] = await connection.pool.execute(sql, values);
    return rows;
  }
  static async addCourse(values) {
    values = (!Array.isArray(values)) ? [values] : values;
    const sql = 'INSERT INTO `courses`(`name`) VALUES (?)';
    const [rows, fields] = await connection.pool.execute(sql, values);
    return rows;
  }
  static async addMultipleCourses(values) { }
  static async deleteCourse(values) {
    values = (!Array.isArray(values)) ? [values] : values;
    const sql = 'DELETE FROM `courses` WHERE `id` = ?';
    const [rows, fields] = await connection.pool.execute(sql, values);
    return rows
  }
  static async updateCourse(values) {
      values = (!Array.isArray(values)) ? [values] : values;
      const sql = 'UPDATE `courses` SET `name` = ? WHERE `id` = ?';
      const [rows, fields] = await connection.pool.execute(sql, values);
      return rows;
  }
}
module.exports = Courses;

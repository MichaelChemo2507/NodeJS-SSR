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
  static async updateCourse(values) {
    try {
      if (!values) throw new Error('no values received!');
      if (!Array.isArray(values)) values = [values];
      if (values.length > 2 || values.length < 1)
        throw new RangeError('Error in the number of values received!');
      if (typeof values[0] != typeof '' || typeof values1[1] != typeof '')
        throw new TypeError(
          `invalid name type! - receive type ${typeof values[0]} - ${typeof values[1]}`
        );

      const sql = 'UPDATE `courses` SET `naem` = ? WHERE `id` = ?';
      const [rows, fields] = await connection.pool.execute(sql, values);
      return rows;
    } catch (err) {
      console.error('Error in updateCouresById model! - ', err.message);
      throw err;
    }
  }
  static async deleteCourse(values) {
      values = (!Array.isArray(values)) ? [values] : values;
      const sql = 'DELETE FROM `courses` WHERE `id` = ?';
      const [rows, fields] = await connection.pool.execute(sql, values);
      return rows
  }
}
module.exports = Courses;

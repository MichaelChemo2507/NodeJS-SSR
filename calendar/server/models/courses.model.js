const connection = require('../configuration/db');

class Courses {
  static async getAll(reqProps, pageProps) {
    let values = [(pageProps.page * pageProps.rowPerPage), pageProps.rowPerPage, reqProps.user_id];
    let sql = 'SELECT * FROM `courses` LIMIT ?, ? WHERE `ID` IN (SELECT `course_id` FROM `courses_to_teathers` WHERE `user_id` = ?)';
    if (reqProps.body.name) {
      sql += ' AND `name` = ?';
      values.push(reqProps.body.name);
    }
    console.log(values);
    const [rows, fields] = await connection.pool.execute(sql, values);
    return rows;
  }
  static async getTotalPages() {
    let sql = 'SELECT COUNT(id) AS cnt FROM `courses`';
    const [res, fields] = await connection.pool.query({
      sql,
    });
    return res;
  }
  static async findCourseById(values) {
    values = !Array.isArray(values) ? [values] : values;
    const sql = 'SELECT * FROM `courses` WHERE `id` = ?';
    const [rows, fields] = await connection.pool.execute(sql, values);
    return rows;
  }
  static async addCourse(values) {
    values = !Array.isArray(values) ? [values] : values;
    const sql = 'INSERT INTO `courses`(`name`) VALUES (?)';
    const [rows, fields] = await connection.pool.execute(sql, values);
    return rows;
  }
  static async addMultipleCourses(values) { }
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

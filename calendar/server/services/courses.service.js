const CoursesModel = require('../models/courses.model');
const SqlInjection = require('../utils/security.utile');
class CoursesService {
  static async getAll() {
    let rows = await CoursesModel.getAll();
    rows.forEach(obj => {
      Object.values(obj).forEach(val => {
        if (typeof val == '') val = SqlInjection.stripSlashes(val);
      })
    });
    return rows;
  }
  static async findCourseById(values) {
    let rows = await CoursesModel.findCourseById(values);
    rows.forEach(obj => {
      Object.values(obj).forEach(val => {
        if (typeof val == '') val = SqlInjection.stripSlashes(val);
      })
    });
    return rows;
  }
  static async addCourse(values) {
    values = (!Array.isArray(values)) ? [values] : values;
    for (let val of values) {
      if (typeof val == '') val = SqlInjection.addSlashes(val);
    }
    let rows = await CoursesModel.addCourse(values);
    return rows.affectedRows;
  }
  static async deleteCourse(values) {
    values = (!Array.isArray(values)) ? [values] : values;
    let rows = await CoursesModel.deleteCourse(values);
    return rows.affectedRows;
  }
  static async updateCourse(values) {
    try {
      for (let val of values) {
        if (typeof val == '') val = SqlInjection.addSlashes(val);
      }
      let rows = await CoursesModel.updateCourse(values);
      if (rows === undefined) throw new Error('No rows received from the DB!');
      return rows.affectedRows;
    } catch (err) {
      console.error(`Error in service updateCoursById: ${err.message}`);
      throw new Error('Failed to update cours due to an internal error.');
    }
  }
}

module.exports = CoursesService;

const CoursesModel = require('../models/courses.model');
const SqlInjection = require('../utils/security.utile');
class CoursesService {
  static async getAll() {
    let rows = await CoursesModel.getAll();
    rows.forEach(obj => {
      Object.values(obj).forEach(val => {
        if (typeof val == '') val = SqlInjection.stripSlashes(val);
      });
    });
    return rows;
  }
  static async findCourseById(values) {
    let rows = await CoursesModel.findCourseById(values);
    rows.forEach(obj => {
      Object.values(obj).forEach(val => {
        if (typeof val == '') val = SqlInjection.stripSlashes(val);
      });
    });
    return rows;
  }
  static async addCourse(values) {
    values = !Array.isArray(values) ? [values] : values;
    for (let val of values) {
      if (typeof val == '') val = SqlInjection.addSlashes(val);
    }
    let rows = await CoursesModel.addCourse(values);
    return rows.affectedRows;
  }
  static async deleteCourse(values) {
    values = !Array.isArray(values) ? [values] : values;
    let rows = await CoursesModel.deleteCourse(values);
    return rows.affectedRows;
  }
  static async updateCourse(values) {
    values = !Array.isArray(values) ? [values] : values;
    for (let val of values) {
      if (typeof val == '') val = SqlInjection.addSlashes(val);
    }
    let rows = await CoursesModel.updateCourse(values);
    return rows.affectedRows;
  }
}

module.exports = CoursesService;

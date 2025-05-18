const CoursesModel = require('../models/courses.model');
class CoursesService {
  static async getAll() {
    let rows = await CoursesModel.getAll();
    return rows;
  }
  static async findCourseById(values) {
    let rows = await CoursesModel.findCourseById(values);
    return rows;
  }
  static async addCourse(values) {
    values = !Array.isArray(values) ? [values] : values;
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
    let rows = await CoursesModel.updateCourse(values);
    return rows.affectedRows;
  }
}

module.exports = CoursesService;

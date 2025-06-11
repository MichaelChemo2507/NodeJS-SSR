const ActivitiesModel = require('../models/activities.model');
const DetailedError = require('../errors/detailedError.errors');
const UsersModel = require('../models/users.model');
const CoursesModel = require('../models/courses.model');

class ActivitiesService {
  static async getAll(reqProps) {
    let rows = await ActivitiesModel.getAll(reqProps);
    return rows;
  }
  static async addActivity(values) {
    values = !Array.isArray(values) ? [values] : values;
    if (UsersModel.findUserById([values[1]]).length <= 0)
      throw new DetailedError('No User exist', BED_REQUEST);
    if (CoursesModel.findCourseById([values[2]]).length <= 0)
      throw new DetailedError('No course exist', BED_REQUEST);
    let rows = await ActivitiesModel.addActivity(values);
    return rows.affectedRows;
  }
  static async deleteActivty(values) {
    values = !Array.isArray(values) ? [values] : values;
    let rows = await ActivitiesModel.deleteActivty(values);
    return rows.affectedRows;
  }
  static async updateActivty(values) {
    values = !Array.isArray(values) ? [values] : values;
    if (UsersModel.findUserById([values[1]]).length <= 0)
      throw new DetailedError('No User exist', BED_REQUEST);
    if (CoursesModel.findCourseById([values[2]]).length <= 0)
      throw new DetailedError('No course exist', BED_REQUEST);
    let rows = await ActivitiesModel.updateActivty(values);
    return rows.affectedRows;
  }
}

module.exports = ActivitiesService;

const ActivitiesModel = require('../models/activities.model');
const DetailedError = require('../errors/detailedError.errors');
const UsersModel = require('../models/users.model');
const CoursesModel = require('../models/courses.model');
const errorCodes = require('../errors/errorCodes');

class ActivitiesService {
  static async getAll(reqProps) {
    console.log(reqProps);
    
    if (!reqProps.user_id || reqProps.user_id === null)
      throw new DetailedError('no user was set',errorCodes.UNAUTHORIZED)
    let rows = await ActivitiesModel.getAll(reqProps);
    return rows;
  }
  static async addActivity(values) {
    values = !Array.isArray(values) ? [values] : values;
    let users = await UsersModel.findUserById([values[1]]);
    if (users.length <= 0)
      throw new DetailedError('No User exist', errorCodes.BED_REQUEST);
    let courses = await CoursesModel.findCourseById([values[2]]);
    if (courses.length <= 0)
      throw new DetailedError('No course exist', errorCodes.BED_REQUEST);
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
    let users = await UsersModel.findUserById([values[1]]);
    if (users.length <= 0)
      throw new DetailedError('No User exist', errorCodes.BED_REQUEST);
    let courses = await CoursesModel.findCourseById([values[2]]);
    if (courses.length <= 0)
      throw new DetailedError('No course exist', errorCodes.BED_REQUEST);
    let rows = await ActivitiesModel.updateActivty(values);
    return rows.affectedRows;
  }
}

module.exports = ActivitiesService;

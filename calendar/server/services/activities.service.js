const ActivitiesModel = require('../models/activities.model');
const DetailedError = require('../errors/detailedError.errors');
const UsersModel = require('../models/users.model');
const CoursesModel = require('../models/courses.model');
const errorCodes = require('../errors/errorCodes');

class ActivitiesService {
  static async getAll(reqProps, pageProps) {
    let rows;
    if (pageProps) rows = await ActivitiesModel.getAll(reqProps, pageProps, true);
    else rows = await ActivitiesModel.getAll(reqProps);
    if (rows.length <= 0) throw new DetailedError("No result from DB", BED_REQUEST);

    return rows;
  }
  static async getTotalPages(reqProps) {
    let res = await ActivitiesModel.getTotalPages(reqProps);
    return res;
  }
  static async addActivity(values) {
    values = !Array.isArray(values) ? [values] : values;
    console.log(values[1]);
    console.log(values[2]);

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

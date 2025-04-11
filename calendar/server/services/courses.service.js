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
  static async findCoursById(values) {
    let rows = await CoursesModel.findCoursById(values);
    rows.forEach(obj => {
      Object.values(obj).forEach(val => {
        if (typeof val == '') val = SqlInjection.stripSlashes(val);
      })
    });
    return rows;
  }
  static async addCours(values) {
    values = (!Array.isArray(values)) ? [values] : values;
    for (let val of values) {
      if (typeof val == '') val = SqlInjection.addSlashes(val);
    }
    let rows = await CoursesModel.addCours(values);
    return rows.affectedRows;
}
  static async deleteCours(values) {
  try {
    for (let val of values) {
      if (typeof val == '') val = SqlInjection.addSlashes(val);
    }
    let rows = await CoursesModel.deleteCours(values);
    if (rows == undefined) throw new Error('No rows received from the DB!');
    return rows.affectedRows;
  } catch (err) {
    console.error(`Error in service deleteCours: ${err.message}`);
    throw new Error('Failed to delete cours due to an internal error.');
  }
}
  static async updateCours(values) {
  try {
    for (let val of values) {
      if (typeof val == '') val = SqlInjection.addSlashes(val);
    }
    let rows = await CoursesModel.updateCours(values);
    if (rows === undefined) throw new Error('No rows received from the DB!');
    return rows.affectedRows;
  } catch (err) {
    console.error(`Error in service updateCoursById: ${err.message}`);
    throw new Error('Failed to update cours due to an internal error.');
  }
}
}

module.exports = CoursesService;

const CoursesModel = require("../models/courses.model");
class CoursesService {
  static async getAll() {
    try {
      let rows = await CoursesModel.getAll();
      if (rows == undefined) throw new Error("No rows received from the DB!");
      return rows;
    } catch (err) {
      console.error(`Error in service getAll: ${err.message}`);
      throw new Error("Failed to get courses due to an internal error.");
    }
  }
  static async findCoursById(values) {
    try {
      let rows = await CoursesModel.findCoursById(values);
      if (rows == undefined) throw new Error("No rows received from the DB!");
      return rows;
    } catch (err) {
      console.error(`Error in service findCoursById: ${err.message}`);
      throw new Error("Failed to find cours by id due to an internal error.");
    }
  }
  static async addCours(values) {
    try {
      let rows = await CoursesModel.addCours(values);
      if (rows == undefined) throw new Error("No rows received from the DB!");
      return rows.affectedRows;
    } catch (err) {
      console.error(`Error in service addCours: ${err.message}`);
      throw new Error("Failed to add cours due to an internal error.");
    }
  }
  static async deleteCours(values) {
    try {
      let rows = await CoursesModel.deleteCours(values);
      if (rows == undefined) throw new Error("No rows received from the DB!");
      return rows.affectedRows;
    } catch (err) {
      console.error(`Error in service deleteCours: ${err.message}`);
      throw new Error("Failed to delete cours due to an internal error.");
    }
  }
  static async updateCours(values) {
    try {
      let rows = await CoursesModel.updateCoursById(values);
      if (rows === undefined) throw new Error("No rows received from the DB!");
      return rows.affectedRows;
    } catch (err) {
      console.error(`Error in service updateCoursById: ${err.message}`);
      throw new Error("Failed to update cours due to an internal error.");
    }
  }
}

module.exports = CoursesService;

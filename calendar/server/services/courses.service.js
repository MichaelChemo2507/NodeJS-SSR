const CoursesModel = require("../models/courses.model");
const SqlInjection = require("../utils/security");
class CoursesService {
    static async getAll() {
        try {
            let rows = await CoursesModel.getAll();
            if (rows == undefined) throw new Error("No rows received from the DB!");
            rows.forEach(obj => {
                for (let val of obj) {
                    if (typeof val == "")
                        val = SqlInjection.stripSlashes(val);
                }
            })
            return rows;
        } catch (err) {
            console.error(`Error in service getAll: ${err.message}`);
            throw new Error("Failed to get courses due to an internal error.");
        }
    }
    static async findCoursById(values) {
        try {
            for (let val of values) {
                if (typeof val == "")
                    val = SqlInjection.addSlashes(val);
            }
            let rows = await CoursesModel.findCoursById(values);
            if (rows == undefined) throw new Error("No rows received from the DB!");
            for (let val of rows[0]) {
                if (typeof val == "")
                    val = SqlInjection.stripSlashes(val);
            }
            return rows;
        } catch (err) {
            console.error(`Error in service findCoursById: ${err.message}`);
            throw new Error("Failed to find cours by id due to an internal error.");
        }
    }
    static async addCours(values) {
        try {
            for (let val of values) {
                if (typeof val == "")
                    val = SqlInjection.addSlashes(val);
            }
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
            for (let val of values) {
                if (typeof val == "")
                    val = SqlInjection.addSlashes(val);
            }
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
            for (let val of values) {
                if (typeof val == "")
                    val = SqlInjection.addSlashes(val);
            }
            let rows = await CoursesModel.updateCours(values);
            if (rows === undefined) throw new Error("No rows received from the DB!");
            return rows.affectedRows;
        } catch (err) {
            console.error(`Error in service updateCoursById: ${err.message}`);
            throw new Error("Failed to update cours due to an internal error.");
        }
    }
}

module.exports = CoursesService;

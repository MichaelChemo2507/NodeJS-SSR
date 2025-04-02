const connection = require("../configuration/db");

class Courses {
    static async getAll() {
        try {
            const sql = "SELECT * FROM `courses`";
            const [rows, fields] = await connection.pool.query({
                sql,
            });
            return rows;
        } catch (err) {
            console.error("Error in getAll model! - ", err.message);
            throw err;
        }
    }
    static async findCoursById(values) {
        try {
            if (!values) throw new Error("no values received!");
            if (!Array.isArray(values)) values = [values];
            if (values.length > 1 || values.length < 1)
                throw new RangeError("Error in the number of values received!");
            if (typeof values[0] != typeof "")
                throw new TypeError(
                    `invalid name type! - receive type ${values[0]}}`
                );
            const sql = "SELECT * FROM `courses` WHERE `id` = ?";
            const [rows, fields] = await connection.pool.execute(sql, [values]);
            return rows;
        } catch (err) {
            console.error("Error in findCoursById model! - ", err.message);
            throw err;
        }
    }
    static async addCours(values) {
        try {
            if (!values) throw new Error("no values received!");
            if (!Array.isArray(values)) values = [values];
            if (values.length > 1 || values.length < 1)
                throw new RangeError("Error in the number of values received!");
            if (typeof values[0] != typeof "")
                throw new TypeError(
                    `invalid name type! - receive type ${values[0]}}`
                );
            const sql = "INSERT INTO `courses`(`name`) VALUES (?)";
            const [rows, fields] = await connection.pool.execute(sql, values);
            return rows;
        } catch (err) {
            console.error("Error in addCours model! - ", err.message);
            throw err;
        }
    }
    static async addMultipleCourses(values) { }
    static async updateCoursById(values) {
        try {
            if (!values) throw new Error("no values received!");
            if (!Array.isArray(values)) values = [values];
            if (values.length > 2 || values.length < 1)
                throw new RangeError("Error in the number of values received!");
            if (typeof values[0] != typeof "" || typeof values1[1] != typeof "")
                throw new TypeError(
                    `invalid name type! - receive type ${typeof values[0]} - ${typeof values[1]}`
                );

            const sql =
                "UPDATE `courses` SET `naem` = ? WHERE `id` = ?";
            const [rows, fields] = await connection.pool.execute(sql, values);
            return rows;
        } catch (err) {
            console.error("Error in updateCouresById model! - ", err.message);
            throw err;
        }
    }
    static async deleteCours(values) {
        try {
            if (!values) throw new Error("no values received!");
            if (!Array.isArray(values)) values = [values];
            const sql = "DELETE FROM `cours` WHERE `id` = ?";
            const [rows, fields] = await connection.pool.execute(sql, values);

            return rows;
        } catch (err) {
            console.error("Error in deleteCours level! - ", err.message);
            throw err;
        }
    }
}
module.exports = Courses;

//ID	description	user_ID	cours_ID	start_time	end_time	date	is_plan   ---lerning_track
const connection = require('../configuration/db');
const DetailedError = require('../errors/detailedError.errors');
const UsersModel = require('./users.model');
const CoursesModel = require('./courses.model');


class Activities {
    static async getAll(reqProps, pageProps) {
        let values = [reqProps.user_id];
        let sql = 'SELECT * FROM `lerning_track` WHERE `user_ID`= ?';
        const [rows, fields] = await connection.pool.execute(sql, values);
        return rows;
    }
    static async addActivity(values) {
        values = !Array.isArray(values) ? [values] : values;
        if (UsersModel.findUserById([values[1]]).length <= 0)
            throw new DetailedError('No User exist', BED_REQUEST);
        if (CoursesModel.findCourseById([values[2].cours_ID]).length <= 0)
            throw new DetailedError('No course exist', BED_REQUEST);
        const sql = 'INSERT INTO `lerning_track`(`description`,`user_ID`,`cours_ID`,`start_time`,`end_time`,`date`,`is_plan`) VALUES (?,?,?,?,?,?,?,?)';
        const [rows, fields] = await connection.pool.execute(sql, values);
        return rows;
    }
    static async deleteActivty(values) {
        values = !Array.isArray(values) ? [values] : values;
        const sql = 'DELETE FROM `lerning_track` WHERE `id` = ?';
        const [rows, fields] = await connection.pool.execute(sql, values);
        return rows;
    }
    static async updateCourse(values) {
        values = !Array.isArray(values) ? [values] : values;
        if (UsersModel.findUserById([values[1]]).length <= 0)
            throw new DetailedError('No User exist', BED_REQUEST);
        if (CoursesModel.findCourseById([values[2].cours_ID]).length <= 0)
            throw new DetailedError('No course exist', BED_REQUEST);
        const sql = 'UPDATE `lerning_track` SET `description` = ?, `user_ID` = ?, `cours_ID` = ?, `start_time` = ?, `end_time` = ?, `date` = ?, `is_plan` = ?  WHERE `ID` = ?';
        const [rows, fields] = await connection.pool.execute(sql, values);
        return rows;
    }
}
module.exports = Courses;

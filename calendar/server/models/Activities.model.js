const connection = require('../configuration/db');


class Activities {
    static async getAll(reqProps) {
        let values = [reqProps.user_id];
        let sql = 'SELECT * FROM `lerning_track` WHERE `user_ID`= ?';
        const [rows, fields] = await connection.pool.execute(sql, values);
        return rows;
    }
    static async addActivity(values) {
        values = !Array.isArray(values) ? [values] : values;
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
    static async updateActivty(values) {
        values = !Array.isArray(values) ? [values] : values;
        const sql = 'UPDATE `lerning_track` SET `description` = ?, `user_ID` = ?, `cours_ID` = ?, `start_time` = ?, `end_time` = ?, `date` = ?, `is_plan` = ?  WHERE `ID` = ?';
        const [rows, fields] = await connection.pool.execute(sql, values);
        return rows;
    }
}

module.exports = Activities;

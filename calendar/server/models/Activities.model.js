const connection = require('../configuration/db');


class Activities {
    static async getAll(reqProps, pageProps = undefined, custom = false) {
        let values;
        values = [reqProps.user_id];
        let sql = (custom)? 'SELECT `description`, `courses`.`name` AS `course name`, `start_time`, `end_time`, `date`, `is_plan` AS `done` FROM `lerning_track` JOIN `courses` ON `lerning_track`.`cours_ID` = `courses`.`ID` WHERE `user_id` = ?':'SELECT * FROM `lerning_track` WHERE `user_id` = ?';
        if (pageProps) {
            values = [reqProps.user_id, (pageProps.page * pageProps.rowPerPage), pageProps.rowPerPage];
            sql += ' LIMIT ?, ?';
        }
        if (reqProps.name) {
            sql += ' AND `name` = ?';
            values.push(reqProps.name);
        }
        const [rows, fields] = await connection.pool.execute(sql, values);
        return rows;
    }
     static async getTotalPages(reqProps) {
        let values;
        values = [reqProps.user_id];
        let sql = 'SELECT COUNT(id) FROM `lerning_track` WHERE `user_id` = ?';
        const [res, fields] = await connection.pool.execute(sql, values);
        return res;
      }
    static async addActivity(values) {
        values = !Array.isArray(values) ? [values] : values;
        const sql = 'INSERT INTO `lerning_track` (`description`,`user_ID`,`cours_ID`,`start_time`,`end_time`,`date`,`is_plan`) VALUES (?,?,?,?,?,?,?)';
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
        console.log(values);

        const sql = 'UPDATE `lerning_track` SET `description` = ?, `user_ID` = ?, `cours_ID` = ?, `start_time` = ?, `end_time` = ?, `date` = ?, `is_plan` = ?  WHERE `ID` = ?';
        const [rows, fields] = await connection.pool.execute(sql, values);
        return rows;
    }
}

module.exports = Activities;

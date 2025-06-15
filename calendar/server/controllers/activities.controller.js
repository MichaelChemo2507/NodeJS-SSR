const ActivitiesService = require('../services/activities.service');
const CoursesService = require('../services/courses.service')
const DetailedError = require('../errors/detailedError.errors');

const { BED_REQUEST, NOT_FOUND } = require('../errors/errorCodes');

class ActivitiesController {
    static async getAddActivityPage(req, res) {
        let courses = await CoursesService.getAll({ user_id: req.user_id });
        res.status(process.env.OK).render('add_activity', {
            data: {
                method: "post",
                URL: "http://localhost:7777/activities/",
                page_title: "add Activity",
                courses: courses,
                btnText: 'ADD',
            },
        });
    }
    static async getActivitiesListPage(req, res) {
        let rowPerPage = 4;
        let page = (req.query.page !== undefined) ? req.query.page : 0;
        let result = await ActivitiesService.getAll({ user_id: req.user_id, body: req.body }, { page, rowPerPage });
        let total_pages = await ActivitiesService.getTotalPages({ user_id: req.user_id });
        res.status(process.env.OK).render('activities_list', {
            result: result,
            page_title: 'Activities-List',
            page: page,
            total_pages: total_pages,
        });
    }
    static async getAll(req, res) {
        const rows = await ActivitiesService.getAll({ user_id: req.user_id });
        if (rows.length == 0)
            throw new DetailedError('No result from db', NOT_FOUND);
        if (!rows) throw new RangeError('No resulte from db!');
        return res.status(process.env.OK).json({ success: true, rows: rows });
    }
    static async addActivity(req, res) {
        let { description, course, start_time, end_time, date, is_plan } = req.body;
        const insertId = await ActivitiesService.addActivity([String(description), parseInt(req.user_id), parseInt(course), String(start_time), String(end_time), String(date), parseInt(is_plan)]);
        if (insertId === 0)
            throw new DetailedError('No row was created.', NOT_FOUND);
        return res.status(process.env.CREATED).redirect('listPage');
    }
    static async deleteActivity(req, res) {
        let id = parseInt(req.params.id);
        if (!id || id <= 0 || id === NaN)
            throw new DetailedError('Invalid values were sent.', BED_REQUEST);
        const affectedRows = await ActivitiesService.deleteActivty(id);
        if (affectedRows === 0)
            throw new DetailedError('No rows deleted.', NOT_FOUND);
        return res
            .status(process.env.NO_CONTECT)
            .send({ success: true, message: `rows by id ${id} are deleted` });
    }
    static async updateActivty(req, res) {
        let id = parseInt(req.params.id);
        let { description, user_ID, cours_ID, start_time, end_time, date, is_plan } = req.body;
        const affectedRows = await ActivitiesService.updateActivty([String(description), parseInt(user_ID), parseInt(cours_ID), String(start_time), String(end_time), String(date), parseInt(is_plan), id]);
        if (affectedRows === 0)
            throw new DetailedError('No rows updated.', NOT_FOUND);
        res.status(process.env.CREATED).send({ success: true, message: `rows by id ${id} are updated` });
    }
}
module.exports = ActivitiesController;

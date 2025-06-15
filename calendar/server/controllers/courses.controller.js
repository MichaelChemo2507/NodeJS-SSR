const CoursesService = require('../services/courses.service');
const DetailedError = require('../errors/detailedError.errors');

const { BED_REQUEST, NOT_FOUND } = require('../errors/errorCodes');

class CoursesController {
  static getAddCoursesPage(req, res) {
    res.status(process.env.OK).render('add_courses', {
      data: {
        btnText: 'ADD',
        URL: 'http://localhost:7777/courses/',
        method: 'post',
      },
    });
  }
  static getUpdateCoursesPage(req, res) {
    let id = parseInt(req.params.id);
    res.status(process.env.OK).render('add_courses', {
      data: {
        id: id,
        btnText: 'UPDATE',
        URL: `http://localhost:7777/courses/${id}`,
        method: 'post',
      },
    });
  }
  static async getCoursesListPage(req, res) {
    let rowPerPage = 4;
    let page = (req.query.page !== undefined) ? req.query.page : 0;
    let result = await CoursesService.getAll({ user_id: req.user_id, body: req.body }, { page, rowPerPage });
    let total_pages = await CoursesService.getTotalPages();
    total_pages = Math.ceil(Object.values(total_pages[0])[0] / rowPerPage);
    res.status(process.env.OK).render('courses_list', {
      result: result,
      page_title: 'Courses-List',
      page: page,
      total_pages: total_pages,
    });
  }
  static async getAll(req, res) {
    const courses = await CoursesService.getAll({ user_id: req.user_id, body: req.body });
    if (courses.length == 0)
      throw new DetailedError('No result from db', NOT_FOUND);
    if (!courses) throw new RangeError('No resulte from db!');
    return res.status(process.env.OK).json({ success: true, rows: courses });
  }
  static async findCourseById(req, res) {
    let id = parseInt(req.params.id);
    if (!id || id <= 0 || id === NaN)
      throw new DetailedError('Invalid values were sent.', BED_REQUEST);
    const cours = await CoursesService.findCourseById(id);
    console.log(cours);
    if (cours.length == 0)
      throw new DetailedError('No result from db.', NOT_FOUND);
    if (!cours) throw new RangeError('No resulte from db!');
    return res.status(process.env.OK).json({ success: true, rows: cours });
  }
  static async addCourse(req, res) {
    let { name } = req.body;
    if (!name || name !== '' || name === NaN)
      throw new DetailedError('Invalid values were sent.', BED_REQUEST);
    const insertId = await CoursesService.addCourse([String(name)]);
    if (insertId === 0)
      throw new DetailedError('No row was created.', NOT_FOUND);
    return res.status(process.env.CREATED).redirect('listPage');
  }
  static async deleteCourse(req, res) {
    let id = parseInt(req.params.id);
    if (!id || id <= 0 || id === NaN)
      throw new DetailedError('Invalid values were sent.', BED_REQUEST);
    const affectedRows = await CoursesService.deleteCourse(id);
    if (affectedRows === 0)
      throw new DetailedError('No rows deleted.', NOT_FOUND);
    return res
      .status(process.env.NO_CONTECT)
      .send({ success: true, message: `rows by id ${id} are deleted` });
  }
  static async updateCourse(req, res) {
    let id = parseInt(req.params.id);
    let { name } = req.body;
    console.log(name);
    if (!name || name !== '' || !id || id <= 0 || id === NaN)
      throw new DetailedError('Invalid values were sent.', BED_REQUEST);
    const affectedRows = await CoursesService.updateCourse([String(name), id]);
    if (affectedRows === 0)
      throw new DetailedError('No rows updated.', NOT_FOUND);
    res.status(process.env.CREATED).redirect('listPage');
  }
}
module.exports = CoursesController;

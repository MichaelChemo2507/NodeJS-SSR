const CoursesService = require('../services/courses.service');
const DetailedError = require('../errors/detailedError.errors');
const { BED_REQUEST, NOT_FOUND } = require('../errors/errorCodes');

class CoursController {
  static getAddCoursesPage(req, res) {
    res.render('add_courses', {});
  }
  static async getCoursesListPage(req, res) {
    try {
      let result = await CoursController.getAll();
      res.status(200).render('courses_list', {
        result: result.rows,
        page_title: 'Courses-List',
      });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ success: false, message: 'Internal server error' });
    }
  }
  static async getAll(req, res) {
    const courses = await CoursesService.getAll();
    console.log(courses);
    if (courses.length == 0)
      throw new DetailedError("No result from db", NOT_FOUND);
    if (!courses)
      throw new RangeError('No resulte from db!');
    return res.status(200).json({ success: true, rows: courses });
  }
  static async findCourseById(req, res) {
    let id = parseInt(req.params.id);
    if (!id)
      throw new DetailedError("Invalid values were sent.", BED_REQUEST);
    const cours = await CoursesService.findCourseById(id);
    console.log(cours);
    if (cours.length == 0)
      throw new DetailedError("No result from db.", NOT_FOUND);
    if (!cours)
      throw new RangeError('No resulte from db!');
    return res.status(200).json({ success: true, rows: cours });
  }
  static async addCourse(req, res) {
    let { name } = req.body;
    if (!name || name === "")
      throw new DetailedError("Invalid values were sent.", BED_REQUEST);
    const insertId = await CoursesService.addCourse([String(name)]);
    if (insertId === 0)
      throw new DetailedError("No row was created.", NOT_FOUND);
    return res.status(201).json({ success: true, insertId: insertId });
  }
  static async deleteCourse(req, res) {
    let id = parseInt(req.params.id);
    if (!id)
      throw new DetailedError("Invalid values were sent.", BED_REQUEST);
    const affectedRows = await CoursesService.deleteCourse(id);
    if (affectedRows === 0)
      throw new DetailedError("No rows deleted.", NOT_FOUND);
    return res.status(204).send({ success: true, message: `rows by id ${id} are deleted` });
  }
  static async updateCourse(req, res) {
    try {
      let { id } = req.params;
      let { name } = req.body;
      if (name == undefined)
        throw new Error(
          'Invalid values received! || Missing values! Values : ' + name
        );
      const affectedRows = await CoursesService.updateCourse([String(name), id]);
      if (affectedRows < 1)
        res
          .status(404)
          .json({ success: false, message: `id ${id} is not exist` });
      else
        res
          .status(204)
          .json({ success: true, message: `row ${id} is updated` });
    } catch (error) {
      console.error('Error in Updating cours By Id:', error.message);
      res
        .status(500)
        .json({ success: false, message: 'Internal server error' });
    }
  }
}
module.exports = CoursController;

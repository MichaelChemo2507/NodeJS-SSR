const CoursesService = require('../services/courses.service');

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
    if (!courses || courses.length == 0)
      throw new RangeError('No resulte from db!');
    return res.status(200).json({ success: true, rows: courses });
  }
  static async findCoursById(req, res) {
    try {
      let { id } = req.params;
      const cours = await CoursesService.findCoursById(id);
      if (cours.length > 0) res.json({ success: true, rows: cours });
      else res.status(404).json({ success: false, message: 'cours not found' });
    } catch (error) {
      console.error(
        'Error in courses controller level (findCoursById):',
        error
      );
      res
        .status(500)
        .json({ success: false, message: 'Internal server error' });
    }
  }
  static async addCours(req, res) {
    try {
      let { name } = req.body;
      if (name == undefined)
        throw new Error(
          'Invalid values received! || Missing values! Values : ' + name
        );
      const insertId = await CoursesService.addCours([String(name)]);
      res.status(201).json({ success: true, insertId: insertId });
    } catch (error) {
      console.error('Error in courses controller level (addPlant):', error);
      res
        .status(500)
        .json({ success: false, message: 'Internal server error' });
    }
  }
  static async deleteCours(req, res) {
    try {
      let { id } = req.params;
      const affectedRows = await CoursesService.deleteCours(id);
      if (affectedRows < 1)
        res
          .status(404)
          .json({ success: false, message: `id ${id} is not exist` });
      else
        res
          .status(204)
          .json({ success: true, message: `row ${id} is deleted` });
    } catch (error) {
      console.error('Error in courses controller level (deletePlant):', error);
      res
        .status(500)
        .json({ success: false, message: 'Internal server error' });
    }
  }
  static async updateCours(req, res) {
    try {
      let { id } = req.params;
      let { name } = req.body;
      if (name == undefined)
        throw new Error(
          'Invalid values received! || Missing values! Values : ' + name
        );
      const affectedRows = await CoursesService.updateCours([String(name), id]);
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

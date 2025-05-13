const UsersService = require('../services/users.service');
const DetailedError = require('../errors/detailedError.errors');
const { BED_REQUEST, NOT_FOUND } = require('../errors/errorCodes');

class UsersController {
  static async getAll(req, res) {
    const users = await UsersService.getAll();
    if (users.length == 0)
      throw new DetailedError('No result from db', NOT_FOUND);
    if (!courses) throw new RangeError('No resulte from db!');
    return res.status(process.env.OK).json({ success: true, rows: courses });
  }
  static async findUserById(req, res) {
    let id = parseInt(req.params.id);
    if (!id || id <= 0 || id === NaN)
      throw new DetailedError('Invalid values were sent.', BED_REQUEST);
    const user = await UsersService.findUserById(id);
    if (user.length == 0)
      throw new DetailedError('No result from db.', NOT_FOUND);
    if (!cours) throw new RangeError('No resulte from db!');
    return res.status(process.env.OK).json({ success: true, rows: user });
  }
  static async addUser(req, res) {
    let { name, user_level, user_name, password, email } = req.body;
    const insertId = await UsersService.addUser([
      String(name),
      user_level,
      String(user_name),
      String(password),
      String(email),
    ]);
    if (insertId === 0)
      throw new DetailedError('No row was created.', NOT_FOUND);
    return res.status(process.env.CREATED).send({ success: true, insertId: insertId });
  }
  static async deleteUser(req, res) {
    let id = parseInt(req.params.id);
    if (!id || id <= 0 || id === NaN)
      throw new DetailedError('Invalid values were sent.', BED_REQUEST);
    const affectedRows = await UsersService.deleteUser(id);
    if (affectedRows === 0)
      throw new DetailedError('No rows deleted.', NOT_FOUND);
    return res
      .status(process.env.NO_CONTECT)
      .send({ success: true, message: `rows by id ${id} are deleted` });
  }
  static async updateUser(req, res) {
    let id = parseInt(req.params.id);
    let { name, user_level, user_name, password, email } = req.body;
    const affectedRows = await UsersService.updateUser([
      String(name),
      user_level,
      String(user_name),
      String(password),
      String(email),
      id,
    ]);
    if (affectedRows === 0)
      throw new DetailedError('No rows updated.', NOT_FOUND);
    res
      .status(process.env.CREATED)
      .send({ success: true, message: `rows by id ${id} are updated` });
  }
}
module.exports = UsersController;

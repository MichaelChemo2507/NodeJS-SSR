const UserLevelModel = require('../models/userLevel.model');
const DetailedError = require('../errors/detailedError.errors')
const {NOT_FOUND} = require('../errors/errorCodes')
class userLevelService {
  static async getAll() {
    let rows = await UserLevelModel.getAll();
      if (rows.length <= 0)
        throw new DetailedError('NO RESULT FROM DB.',NOT_FOUND)
    return rows;
  }
  
}

module.exports = userLevelService;

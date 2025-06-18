
const DetailedError = require('../errors/detailedError.errors');
const UserLevelService = require('../services/userLevel.service');
const UsersService = require('../services/users.service')
const { BED_REQUEST, NOT_FOUND, UNAUTHORIZED } = require('../errors/errorCodes');
const md5 = require('md5');

class UserLevelController {
    static async getRagistrationPage(req, res) {
        const userLevel = await UserLevelService.getAll();
        if (!userLevel || userLevel === null || userLevel.length <= 0)
            throw new DetailedError('NO RESULT FROM DB.', NOT_FOUND);
        res.status(process.env.OK).render('ragistration_page', {
            data: {
                userLevel: userLevel,
                btnText: 'SUBMIT',
                URL: 'http://localhost:7777/login/',
                method: 'post',
            },
        });
    }
    static async ragistrationProcess(req, res) {
        let { name, userLevel, userName, email, password } = req.body;
        const insertId = await UsersService.addUser([
            String(name),
            parseInt(userLevel),
            String(userName),
            md5(String(password) + process.env.MD5_SECRET_KEY),
            String(email),
        ]);
        if (insertId === 0)
            throw new DetailedError('NO USER JOINED.', NOT_FOUND);
        return res.status(process.env.OK).redirect("http://localhost:7777/login/");
    }
}
module.exports = UserLevelController;

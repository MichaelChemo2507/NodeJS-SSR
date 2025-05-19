
const DetailedError = require('../errors/detailedError.errors');
const LoginService = require('../services/login.service')
const { BED_REQUEST, NOT_FOUND, UNAUTHORIZED } = require('../errors/errorCodes');
const md5 = require('md5');

class LoginController {
    static getLoginPage(req, res) {
        res.status(process.env.OK).render('login_page', {
            data: {
                btnText: 'SUBMIT',
                URL: 'http://localhost:7777/login/',
                method: 'post',
            },
        });
    }
    static async authorizationProcess(req, res) {
        let { email, password } = req.body;
        if (!email || !password) {
            throw new Error('Invalid values were sent.', BED_REQUEST);
        } const accessToken = await LoginService.authorizationProcess([md5(String(password) + process.env.MD5_SECRET_KEY), String(email)]);
        if (!accessToken)
            throw new DetailedError('No Access Token provided.', UNAUTHORIZED);
        res.cookie('token', accessToken, {
            httpOnly: true,
        });
        return res.status(process.env.OK).json({ saccess: true });
    }
}
module.exports = LoginController;

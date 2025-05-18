
const { BED_REQUEST, NOT_FOUND } = require('../errors/errorCodes');

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
}
module.exports = LoginController;


const { BED_REQUEST, NOT_FOUND } = require('../errors/errorCodes');
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
    static async authorisationProcess(req, res) {
        let { email, password } = req.body;
        if(!email || !password)
            throw new DetailedError('Invalid values were sent.', BED_REQUEST);
        const affectedRows = await LoginController.authorisationProcess([md5(String(password)),String(email)]);
        return res.status(process.env.CREATED).redirect('listPage');
    }
}
module.exports = LoginController;

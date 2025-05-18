const UsersModel = require('../models/users.model')
class LoginService {
    static async authorisationProcess(values) {
        values = !Array.isArray(values) ? [values] : values;
        let result = UsersModel.authorisationProcess()
    }
}

module.exports = LoginService;

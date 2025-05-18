const JWT = require('jsonwebtoken');
const DetailedError = require('../errors/detailedError.errors');
const UsersModel = require('../models/users.model')
const { BED_REQUEST, NOT_FOUND,UNAUTHORIZED } = require('../errors/errorCodes');

class LoginService {
    static async authorizationProcess(values) {
        values = !Array.isArray(values) ? [values] : values;
        let result = await UsersModel.authorizationProcess(values);
        if (!result || result.length == 0)
            throw new DetailedError('Unauthorized user!', UNAUTHORIZED);
        
        const accessToken = JWT.sign({
            ID: result[0].ID
        }, process.env.ACCESS_SECRET_TOKEN, { expiresIn: '1h' })
        return accessToken;
    }
}

module.exports = LoginService;

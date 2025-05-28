const JWT = require('jsonwebtoken');
const {DetailedError} = require('../errors/detailedError.errors')
const {FORBIDDEN} = require('../errors/errorCodes')
const authinticationProcess = (req, res, next) => {
    const jwtToken = req.cookies.token;
    JWT.verify(jwtToken, process.env.ACCESS_SECRET_TOKEN, (err,) => {
        if (err)
            throw new DetailedError()

    })
}
module.exports = authinticationProcess;

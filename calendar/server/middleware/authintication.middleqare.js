const JWT = require('jsonwebtoken');
const DetailedError = require('../errors/detailedError.errors');
const { FORBIDDEN } = require('../errors/errorCodes')
const authinticationProcess = (req, res, next) => {
    try {
        const jwtToken = req.cookies.token;
        req.user_id = -1;
        if (jwtToken !== "") {
            JWT.verify(jwtToken, process.env.ACCESS_SECRET_TOKEN, (err, decodedToken) => {
                if (err)
                    throw new DetailedError("Failure in the authintication process", FORBIDDEN);
                else {
                    let data = decodedToken.ID;
                    req.user_id = data;
                }
            })
        }
        if (req.user_id < 0)
            throw new DetailedError("Authorization expired. Relogged required.", FORBIDDEN);
        next();
    } catch (err) {
        next(err);
    }
}
module.exports = authinticationProcess;

const JWT = require('jsonwebtoken');
const DetailedError = require('../errors/detailedError.errors');
const { FORBIDDEN } = require('../errors/errorCodes')
const authinticationProcess = (req, res, next) => {
    try {
        const jwtToken = req.cookies.token;
        req.user_id = -1;
        if (jwtToken !== "") {
            JWT.verify(jwtToken, process.env.ACCESS_SECRET_TOKEN, (err, decodedToken) => {
                console.log("decodedToken=", decodedToken);
                if (err)
                    throw new DetailedError("Somthing wrong with authintication.", FORBIDDEN);
                else {
                    let data = decodedToken.ID;
                    req.user_id = data;
                    console.log(req.user_id);
                }
            })
        }
        if (req.user_id < 0)
            throw new DetailedError("your authorization id expired. need to reloged.", FORBIDDEN);
        next();
    } catch (err) {
        next(err);
    }
}
module.exports = authinticationProcess;

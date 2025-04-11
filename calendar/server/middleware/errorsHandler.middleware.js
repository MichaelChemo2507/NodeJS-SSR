const DetailedError = require('../errors/detailedError.errors');
const { BED_REQUEST } = require('../errors/errorCodes');

const errorHandler = (error, req, res, next) => {
    console.log(error);
    if (error.code === 'ER_WRONG_ARGUMENTS')
        return res.status(400).json({ success: false, type: "ER_WRONG_ARGUMENTS", message: error.message });
    if (error.code === 'ER_NO_SUCH_TABLE')
        return res.status(500).json({ success: false, type: "ER_NO_SUCH_TABLE", message: error.message });
    if (error.code === 'ECONNREFUSED')
        return res.status(500).json({ success: false, type: "ECONNREFUSED", message: "Cant connect to the DB!" });
    if (error instanceof RangeError)
        return res.status(500).json({ success: false, type: "RangeError", message: error.message });
    if (error instanceof DetailedError)
        return res.status(error.statusCode).json({ success: false, type: "DetailedError", message: error.message });
    return res.status(500).json({ success: false, message: "Something whent wrong!" });
};

module.exports = errorHandler;

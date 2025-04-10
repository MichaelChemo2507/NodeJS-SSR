const errorHandler = (error, req, res, next) => {
    console.log(error);
    if (error.code === 'ECONNREFUSED')
        return res.status(500).json({ success: false, message: "Cant connect to the DB!" });
    if (error instanceof RangeError)
        return res.status(500).json({ success: false, message: error.message });
    return res.status(500).json({ success: false, message: "Something whent wrong!" });
};

module.exports = errorHandler;

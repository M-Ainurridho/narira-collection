const response = (statusCode, msg, res, data = null) => {
    if (statusCode === 500) {
        return res.status(statusCode).json({
            status: false,
            msg,
            error: data,
        })
    }

    if (statusCode >= 400 && statusCode < 500) {
        return res.status(statusCode).json({
            status: false,
            msg,
            errors: data,
        })
    }

    return res.status(statusCode).json({
        status: true,
        msg,
        payload: data,
    })
}

module.exports = response

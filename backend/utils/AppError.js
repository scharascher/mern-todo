const ErrorType = require('./ErrorType');

class AppError extends Error {
    constructor(message, statusCode) {
        super(message);

        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith('4') ? ErrorType.FAIL : ErrorType.ERROR;
        this.isOperational = true;
    }
}

module.exports = AppError;

const AppError = require('./AppError');

module.exports = (promise, next) => {
    promise.catch((err) => next(new AppError(`Error ${err}`, 500)));
};

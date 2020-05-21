const routes = require('express').Router();
const handleRouteError = require('../utils/handleRouteError');
const TodoType = require('../models/todoType.model');

routes.route('/').get((req, res, next) => {
    handleRouteError(
        TodoType.find(getUserIdObjFromReq(req)).then((todoTypes) => res.json(todoTypes)),
        next,
    );
});

routes.route('/').put((req, res, next) => {
    const newTodoType = new TodoType(getTodoTypeObjectByReq(req));
    handleRouteError(
        newTodoType.save().then(() => res.json(newTodoType)),
        next,
    );
});

routes.route('/:id').get((req, res, next) => {
    handleRouteError(
        TodoType.findById(req.params.id).then((todoType) => res.json(todoType)),
        next,
    );
});
routes.route('/:id').delete((req, res, next) => {
    handleRouteError(
        TodoType.findByIdAndDelete(req.params.id).then((data) => res.json()),
        next,
    );
});
routes.route('/:id').post((req, res, next) => {
    handleRouteError(
        TodoType.findById(req.params.id).then((todoType) => {
            const obj = getTodoTypeObjectByReq(req);
            todoType = Object.assign(todoType, obj);
            handleRouteError(
                todoType.save().then(() => res.json(todoType)),
                next,
            );
        }),
        next,
    );
});
module.exports = routes;

function getUserIdObjFromReq(req) {
    return { userId: req.user._id.toString() };
}

function getTodoTypeObjectByReq(req) {
    return {
        name: req.body.name,
        ...getUserIdObjFromReq(req),
    };
}

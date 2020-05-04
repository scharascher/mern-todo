const routes = require('express').Router();
const handleRouteError = require('../utils/handleRouteError');

const Todo = require('../models/todo.model');
const TodoType = require('../models/todoType.model');
routes.route('/').get((req, res, next) => {
    handleRouteError(
        Todo.find().then((todos) => res.json(todos)),
        next,
    );
});

routes.route('/').put(async (req, res, next) => {
    const obj = await getTodoObjectByReq(req);
    const newTodo = new Todo(obj);
    handleRouteError(
        newTodo.save().then(() => res.json({ success: 1 })),
        next,
    );
});

routes.route('/:id').get((req, res, next) => {
    handleRouteError(
        Todo.findById(req.params.id).then((todo) => res.json(todo)),
        next,
    );
});
routes.route('/:id').delete((req, res, next) => {
    handleRouteError(
        Todo.findByIdAndDelete(req.params.id).then(() =>
            res.json({ success: 1 }),
        ),
        next,
    );
});
routes.route('/:id').post((req, res, next) => {
    handleRouteError(
        Todo.findById(req.params.id).then(async (todo) => {
            const obj = await getTodoObjectByReq(req);
            todo = Object.assign(todo, obj);
            handleRouteError(
                todo.save().then(() => res.json({ success: 1 })),
                next,
            );
        }),
        next,
    );
});
module.exports = routes;

async function getTodoObjectByReq(req) {
    return new Promise((resolve) => {
        const defaultType = TodoType.findOne({ name: req.body.type }).then(
            (type) => {
                resolve({
                    userId: req.body.userId,
                    title: req.body.title,
                    description: req.body.description,
                    duration: Number(req.body.duration),
                    date: Date.parse(req.body.date),
                    priority: Number(req.body.priority),
                    typeId: type._id,
                });
            },
        );
    });
}

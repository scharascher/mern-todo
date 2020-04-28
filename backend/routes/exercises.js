const routes = require('express').Router();
const handleRouteError = require("../utils/handleRouteError");

const Exercise = require('../models/exercise.model');
routes.route('/').get((req, res, next) => {
    handleRouteError(Exercise.find()
        .then(exercises => res.json(exercises)), next);
});

routes.route('/').put((req, res, next) => {
    const newExercise = new Exercise(getExerciseObjectByReq(req));
    handleRouteError(newExercise.save()
        .then(() => res.json({success: 1})), next);
});

routes.route('/:id').get((req, res, next) => {
    handleRouteError(Exercise.findById(req.params.id)
        .then(exercise => res.json(exercise)), next);
});
routes.route('/:id').delete((req, res, next) => {
    handleRouteError(Exercise.findByIdAndDelete(req.params.id)
        .then(() => res.json({success: 1})), next);
});
routes.route('/update/:id').post((req, res, next) => {
    handleRouteError(Exercise.findById(req.params.id)
        .then(exercise => {
            exercise = Object.assign(exercise, getExerciseObjectByReq(req));
            handleRouteError(exercise.save()
                .then(() => res.json({success: 1})),
                next);
        }), next);
});
module.exports = routes;

function getExerciseObjectByReq(req) {
    return  {
        userId: req.body.userId,
        description: req.body.description,
        duration: Number(req.body.duration),
        date: Date.parse(req.body.date),
        importance: Number(req.body.importance)
    };
}

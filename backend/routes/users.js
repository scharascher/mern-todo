const handleRouteError = require("../utils/handleRouteError");
const routes = require('express').Router();
const User = require('../models/user.model');

routes.route('/register').put((req, res, next) => {
    const username = req.body.username;
    const newUser = new User({username});
    newUser.password = newUser.generateHash(req.body.password);
    handleRouteError(newUser.save()
        .then(() => res.json({success: 1})), next);

});

routes.route('/getUsers').get((req, res, next) => {
    handleRouteError(User.find()
        .then(users => {
            res.json(users)
        }), next);
});

routes.route('/deleteUser/:id').delete((req, res, next) => {
    handleRouteError(User.findByIdAndDelete(req.params.id)
        .then(() => res.json({success: 1})));
});

routes.route('/updateUser/:id').post((req, res, next) => {
    handleRouteError(User.findById(req.params.id)
        .then(user => {
            user.password = user.generateHash(req.body.password);
            user.username = req.body.username;
            handleRouteError(user.save()
                .then(() => res.json({success: 1})), next);
        }), next);
});
module.exports = routes;



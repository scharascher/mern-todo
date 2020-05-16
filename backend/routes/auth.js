const routes = require('express').Router();
const User = require('../models/user.model');
// const Joi = require('@hapi/joi');
const passport = require('passport');

// const userSchema = Joi.object().keys({
//     username: Joi.string().required(),
//     password: Joi.string().required(), // .regex(/^[a-zA-Z0-9]{6,30}$/)
//     confirmationPassword: Joi.any().valid(Joi.ref('password')).required(),
// });
routes.route('/checkAuth').get((req, res) => {
    return res.json(req.isAuthenticated());
});

routes.route('/login').post((req, res, next) => {
    passport.authenticate('local', (err, user) => {
        if (err) {
            res.status(500);
            res.json({ error: err });
        }

        if (!user) {
            res.status(400);
            res.json({ error: 'INVALID' });
        }

        req.login(user, function (err) {
            if (err) {
                res.status(500);
                res.json({ error: err });
                return;
            }
            res.cookie('userId', user._id.toString());
            res.json();
        });
    })(req, res, next);
});

routes.route('/register').post(async (req, res) => {
    User.register(new User({ username: req.body.username }), req.body.password, function (err) {
        if (err) {
            res.status(500);
            res.json({ error: err });
        }
        res.json();
    });
});

routes.get('/logout', function (req, res) {
    req.logout();
    res.status(200);
    res.json();
});

module.exports = routes;

const routes = require('express').Router();
const User = require('../models/user.model');
// const Joi = require('@hapi/joi');
const passport = require('passport');
const isLoggedIn = require('../utils/isLoggedIn');

// const userSchema = Joi.object().keys({
//     username: Joi.string().required(),
//     password: Joi.string().required(), // .regex(/^[a-zA-Z0-9]{6,30}$/)
//     confirmationPassword: Joi.any().valid(Joi.ref('password')).required(),
// });
routes.route('/checkAuth').post(isLoggedIn);

routes.route('/login').post((req, res, next) => {
    passport.authenticate('local', (err, user) => {
        if (err) {
            res.json({ success: 0, error: err });
        }

        if (!user) {
            res.json({ success: 0, error: 'INVALID' });
        }

        req.login(user, function (err) {
            if (err) {
                res.json({ success: 0, error: err });
                return;
            }
            res.cookie('userId', user._id.toString());
            res.json({ success: 1 });
        });
    })(req, res, next);
});

routes.route('/register').post(async (req, res) => {
    User.register(new User({ username: req.body.username }), req.body.password, function (err) {
        if (err) {
            console.log('error while user register!', err);
            res.json({ success: 0, error: err });
        }

        console.log('user registered!');
        res.json({ success: 1 });
    });
});

routes.get('/logout', function (req, res) {
    req.logout();
    res.status(200);
    res.json({});
});

module.exports = routes;

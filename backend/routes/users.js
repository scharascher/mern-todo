const handleRouteError = require('../utils/handleRouteError');
const routes = require('express').Router();
const User = require('../models/user.model');
const isLoggedIn = require('../utils/isLoggedIn');
routes.use(isLoggedIn);
routes.route('/').get((req, res, next) => {
    handleRouteError(
        User.find().then((users) => {
            res.json(users);
        }),
        next,
    );
});

// routes.route('/:id').delete((req, res) => {
//     handleRouteError(User.findByIdAndDelete(req.params.id).then(() => res.json({ success: 1 })));
// });
//
// routes.route('/:id').post((req, res, next) => {
//     handleRouteError(
//         User.findById(req.params.id).then((user) => {
//             user.password = user.generateHash(req.body.password);
//             user.username = req.body.username;
//             handleRouteError(
//                 user.save().then(() => res.json({ success: 1 })),
//                 next,
//             );
//         }),
//         next,
//     );
// });
module.exports = routes;

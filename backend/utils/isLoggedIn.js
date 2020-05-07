module.exports = (req, res, next) => {
    if (req.session.passport.user) {
        console.log(req.isAuthenticated());
        return next();
    }
    res.json({ error: 'NOT_AUTHORIZED' });
};

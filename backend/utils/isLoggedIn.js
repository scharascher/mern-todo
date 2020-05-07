module.exports = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.json({ error: 'NOT_AUTHORIZED' });
};

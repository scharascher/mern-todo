const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const LocalStrategy = require('passport-local').Strategy;
const AppError = require('./utils/AppError');
const ErrorType = require('./utils/ErrorType');
const User = require('./models/user.model');
const isLoggedIn = require('./utils/isLoggedIn');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(
    cors({
        origin: 'http://localhost:3000',
        credentials: true,
        secure: false,
    }),
);
app.use(cookieParser(process.env.SECRET));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser(process.env.SECRET));

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});
mongoose.connection.once('open', () => {
    console.log('MongoDB connection successful');
});
mongoose.set('useCreateIndex', true);

const sessionStore = new MongoStore({
    mongooseConnection: mongoose.connection,
    collection: 'sessions',
});
app.use(
    session({
        cookie: { secure: false, httpOnly: true },
        secret: process.env.SECRET,
        resave: true,
        rolling: true,
        saveUninitialized: true,
        store: sessionStore,
    }),
);
app.use(passport.initialize());
app.use(passport.session());

const todosRouter = require('./routes/todos');
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const todoTypesRouter = require('./routes/todoTypes');
app.use('/api/', authRouter);
app.use('/api/todos', isLoggedIn, todosRouter);
app.use('/api/users', usersRouter);
app.use('/api/todoTypes', todoTypesRouter);

app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});
app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || ErrorType.ERROR;

    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
    });
});
app.listen(port, () => {
    console.log('Server is running on port: ' + port);
});

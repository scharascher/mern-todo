const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const AppError = require('./utils/AppError');
const ErrorType = require('./utils/ErrorType');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
    useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true
});
mongoose.connection.once('open', () => {
    console.log('MongoDB connection successful');
});

const todosRouter = require('./routes/todos');
const usersRouter = require('./routes/users');
app.use('/todos', todosRouter);
app.use('/', usersRouter);

app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});
app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || ErrorType.ERROR;

    res.status(err.statusCode).json({
        success: 0,
        status: err.status,
        message: err.message
    });

});
app.listen(port, () => {
    console.log('Server is running on port: ' + port);
});

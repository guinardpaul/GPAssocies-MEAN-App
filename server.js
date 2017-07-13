const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const database = 'mongodb://localhost:27017/GPSuivieFact';

// mongoDB connection
mongoose.Promise = global.Promise;

mongoose.connect(database);
// on connection
mongoose.connection.on('open', () => {
    console.log('Successfully connected to mongoDB');
});
// on error
mongoose.connection.on('error', (err) => {
    console.log('Error trying to connect to mongoDB: ' + err);
});

// set routes
const client = require('./app/routes/client');
const devis = require('./app/routes/devis');
const factureGlobal = require('./app/routes/factureGlobal')
const factureMois = require('./app/routes/factureMois');

// Set app
const app = express();

// MIDDLEWARE
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist')));

// use routes
app.use('/api', client);
app.use('/api', devis);
app.use('/api', factureGlobal);
app.use('/api', factureMois);

// allow to refresh page
// send back to dist/index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './dist', 'index.html'));
});

//catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 400;
    next(err);
});

//error handler
app.use((err, req, res, next) => {
    //set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    //render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
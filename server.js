const express = require('express');
const router = express.Router();
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const fs = require('fs');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const cors = require('cors');
const passport = require('passport');
require('./app/config/passport')(passport);
const nodemailer = require('nodemailer');
const port = process.env.PORT || 3001;

// Changer a database.prod quand déployer en production
const config = require('./app/config/database.dev');
process.env.NODE_ENV = config.environment;

// mongoDB connection
const promise = mongoose.connect(config.uri, config.options);
promise.then((db, err) => {
    if (err) return console.log(err);
    console.log('Successfully connected to ' + config.environment + ' mongoDb database:' + config.db);
});

// Set app
const app = express();

// set routes
const client = require('./app/routes/client')(router);
const devis = require('./app/routes/devis')(router);
const factureGlobal = require('./app/routes/factureGlobal')(router);
const factureAccompte = require('./app/routes/factureAccompte')(router);
const detailsDevis = require('./app/routes/detailsDevis')(router);
const reglement = require('./app/routes/reglement')(router);
const bug = require('./app/routes/bug')(router);
const mailHandler = require('./app/routes/mailHandler')(router);
const auth = require('./app/routes/authentication')(router, passport);

// MIDDLEWARE
// log into console (dev)
app.use(logger('dev'));
// Log into file
// create a write stream (in append mode) 
//var accessLogStream = fs.createWriteStream(path.join(__dirname, 'server.log'), { flags: 'a' })
//app.use(logger('common', { stream: accessLogStream }))

// Favicon
app.use(favicon(path.join(__dirname, config.favicon_path, config.favicon)));
// app.use(favicon(path.join(__dirname, 'dist', 'favicon.ico')))

// Allows cross origin in development only
app.use(cors(config.cors_origin));
// app.use(cors({ origin: 'http://gp-suivifact.herokuapp.com/' }));
// body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Passport authenticate
app.use(passport.initialize());
// Set Static Folder
app.use(express.static(path.join(__dirname, config.static_path)));

// use routes
app.use('/api', client);
app.use('/api', devis);
app.use('/api', factureGlobal);
app.use('/api', factureAccompte);
app.use('/api', detailsDevis);
app.use('/api', reglement);
app.use('/api', bug);
app.use('/api/auth', auth);
app.use('/api/mail', mailHandler);

// allow to refresh page
// send back to dist/index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, config.static_path, config.static_file));
});


// Start Server: Listen on port
app.listen(port, () => {
    console.log('Listening on port ' + port + ' in ' + config.environment + ' mode.');
});
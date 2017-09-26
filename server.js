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
const port = process.env.PORT || 3001;

const database = 'mongodb://admin:admin@ds151024.mlab.com:51024/gp-suivi-fact';

// mongoDB connection
const promise = mongoose.connect(database, {
    useMongoClient: true,
});
promise.then((db, err) => {
    if (err) return console.log(err);
    console.log('Successfully connected to mongoDb:' + database);
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

// MIDDLEWARE
// log into console (dev)
app.use(logger('dev'));
// Log into file
// create a write stream (in append mode) 
//var accessLogStream = fs.createWriteStream(path.join(__dirname, 'server.log'), { flags: 'a' })
//app.use(logger('common', { stream: accessLogStream }))

// Favicon
app.use(favicon(path.join(__dirname, 'dist/src', 'favicon.ico')))
// Allows cross origin in development only
app.use(cors({ origin: 'http://gp-suivifact.herokuapp.com/' }));
// body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Set Static Folder
app.use(express.static(path.join(__dirname, 'dist')));

// use routes
app.use('/api', client);
app.use('/api', devis);
app.use('/api', factureGlobal);
app.use('/api', factureAccompte);
app.use('/api', detailsDevis);
app.use('/api', reglement);
app.use('/api', bug);

// allow to refresh page
// send back to dist/index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './dist', 'index.html'));
});

// Start Server: Listen on port
app.listen(port, () => {
    console.log('Listening on port ' + port);
});
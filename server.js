const express = require('express');
const router = express.Router();
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const port = process.env.PORT || 3001;

const database = 'mongodb://localhost:27017/GPSuivieFact';

mongoose.Promise = global.Promise;
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
const factureMois = require('./app/routes/factureMois')(router);
const detailsDevis = require('./app/routes/detailsDevis')(router);

// MIDDLEWARE
// log into console (dev)
app.use(logger('dev'));
// Allows cross origin in development only
app.use(cors({ origin: 'http://localhost:4200' }));
// body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Set Static Folder
app.use(express.static(path.join(__dirname, 'dist')));

// use routes
app.use('/api', client);
app.use('/api', devis);
app.use('/api', factureGlobal);
app.use('/api', factureMois);
app.use('/api', detailsDevis);

// allow to refresh page
// send back to dist/index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './dist', 'index.html'));
});

// Start Server: Listen on port
app.listen(port, () => {
    console.log('Listening on port ' + port);
});
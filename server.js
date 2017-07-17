const express = require('express');
const router = express.Router();
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const cors = require('cors');
const port = process.env.PORT || 3000;

const database = 'mongodb://localhost:27017/GPSuivieFact';

// mongoDB connection
mongoose.connect(database);
// on connection
mongoose.connection.on('open', () => {
    console.log('Successfully connected to mongoDB');
});
// on error
mongoose.connection.on('error', (err) => {
    console.log('Error trying to connect to mongoDB: ' + err);
});

// Set app
const app = express();

// set routes
const client = require('./app/routes/client')(router);
const devis = require('./app/routes/devis')(router);
const factureGlobal = require('./app/routes/factureGlobal')(router);
const factureMois = require('./app/routes/factureMois')(router); 

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

// allow to refresh page
// send back to dist/index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './dist', 'index.html'));
});

// Start Server: Listen on port 3000
app.listen(port, () => {
  console.log('Listening on port ' + port);
});

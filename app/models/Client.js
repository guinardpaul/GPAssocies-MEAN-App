const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
    civilite: String,
    statutClient: Boolean,
    nom: { type: String, required: true },
    prenom: { type: String, required: true },
    adresseFacturation: String,
    complAdresseFact: String,
    cpFact: String,
    villeFact: String,
    adresseChantier: String,
    complAdresseChantier: String,
    cpChantier: String,
    villeChantier: String,
    email: String,
    numTel: String
});

module.exports = mongoose.model('Client', ClientSchema);
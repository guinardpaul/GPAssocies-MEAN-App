const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Devis = require('./Devis');

// BackEnd Validators Definition
// Validators Function
isNumberChecker = (montantHt) => {
    if (!montantHt) {
        return false;
    } else {
        const regExp = new RegExp(/^[0-9]{0,20}(\.[0-9]{0,4})?$/);
        return regExp.test(montantHt);
    }
};

// Validators
const montantValidator = [{
    validator: isNumberChecker,
    message: 'Le montant doit être positif et au maximum 4 chiffres après la virgule'
}];

const DetailsDevisSchema = mongoose.Schema({
    montantHt: {
        type: Number,
        validate: montantValidator
    },
    tauxTva: {
        type: Number
    },
    montantTtc: {
        type: Number
    },
    devis: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Devis',
        required: true
    },
});

module.exports = mongoose.model('DetailsDevis', DetailsDevisSchema);

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const FactureGlobal = require('./FactureGlobal');

// BackEnd Validators Definition
// Validators Function
isNumberChecker = (montantFacture) => {
    if (!montantFacture) {
        return false;
    } else {
        const regExp = new RegExp(/^[0-9]{0,20}(\.[0-9]{0,4})?$/);
        return regExp.test(montantFacture);
    }
};

// Validators
const montantValidator = [{
    validator: isNumberChecker,
    message: 'Le montant doit être positif et doit avoir au maximum 4 chiffres après la virgule'
}];

const FactureAccompteSchema = new mongoose.Schema({
    status_factureAccompte: {
        type: Boolean,
        default: false
    },
    ref_factureAccompte: {
        type: String,
        required: true
    },
    date_creation: {
        type: Date,
        default: Date.now,
        required: true
    },
    montantFacture: {
        type: Number,
        required: true,
        validate: montantValidator
    },
    reglementClient: {
        type: Number,
        required: true
    },
    factureGlobal: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'FactureGlobal',
        required: true
    },
    valid: {
        type: Boolean,
        default: true,
        required: true
    },
    description: {
        type: String
    },
    updated_at: {
        type: Date,
        default: new Date(),
        required: true
    }
});

module.exports = mongoose.model('FactureAccompte', FactureAccompteSchema);
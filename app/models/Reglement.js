const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const FactureAccompte = require('./FactureAccompte');

// BackEnd Validators Definition
// Validators Function
isNumberChecker = (reglementTtc) => {
    if (!reglementTtc) {
        return false;
    } else {
        const regExp = new RegExp(/^[0-9]{0,20}(\.[0-9]{0,4})?$/);
        return regExp.test(reglementTtc);
    }
};

// Validators
const montantValidator = [{
    validator: isNumberChecker,
    message: 'Le montant doit être positif et doit avoir au maximum 4 chiffres après la virgule'
}];

const ReglementSchema = mongoose.Schema({
    date_reglement: {
        type: Date,
        default: Date.now,
        required: true
    },
    reglementTtc: {
        type: Number,
        required: true,
        validate: montantValidator
    },
    factureAccompte: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'FactureAccompte',
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

module.exports = mongoose.model('Reglement', ReglementSchema);

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const FactureAccompte = require('./FactureAccompte');

const ReglementSchema = mongoose.Schema({
    date_reglement: {
        type: Date,
        default: Date.now,
        required: true
    },
    reglementTtc: {
        type: Number,
        required: true
    },
    factureAccompte: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'FactureAccompte',
        required: true
    },
});

module.exports = mongoose.model('Reglement', ReglementSchema);

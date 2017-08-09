const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const FactureGlobal = require('./FactureGlobal');

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
        required: true
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
});

module.exports = mongoose.model('FactureAccompte', FactureAccompteSchema);
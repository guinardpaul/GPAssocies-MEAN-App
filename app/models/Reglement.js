const mongoose = require('mongoose');
const FactureMois = require('./FactureMois');

const ReglementSchema = mongoose.Schema({
    date_reglement: { type: Date, default: Date.now },
    reglementTtc: Number,
    factureMois: [{ type: mongoose.Schema.Types.ObjectId, ref: 'FactureMois', required: true }],
});

module.exports = mongoose.model('Reglement', ReglementSchema);

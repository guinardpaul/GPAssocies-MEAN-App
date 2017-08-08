const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Client = require('./Client');

const DevisSchema = new mongoose.Schema({
	ref_devis: {
		type: String,
		required: true,
		unique: true
	},
	date_creation: {
		type: Date,
		default: Date.now,
		required: true
	},
	montantHt: {
		type: Number,
		required: true
	},
	tauxTva: {
		type: Number,
		required: true
	},
	montantTtc: {
		type: Number
	},
	client: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Client',
		required: true
	},
});

module.exports = mongoose.model('Devis', DevisSchema);

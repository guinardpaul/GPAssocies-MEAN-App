const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const bugSchema = new mongoose.Schema({
  status_correction: {
    type: String,
    enum: ['Ouvert', 'Corrigé', 'Annulé'],
    default: 'Ouvert',
    required: true
  },
  date_creation: {
    type: Date
  },
  description: {
    type: String,
    required: true
  },
  criticite: {
    type: String,
    enum: ['Bloquant', 'Amelioration', 'Mineur'],
    default: 'Mineur',
    required: true
  }
});

const CRITICITE = {
  Bloquant: { value: 1, name: 'Bloquant' },
  Amelioration: { value: 2, name: 'Amelioration' },
  Mineur: { value: 3, name: 'Mineur' }
}

module.exports = mongoose.model('Bug', bugSchema);
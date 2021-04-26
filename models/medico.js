const { Schema, model } = require('mongoose');

const MedicoSchema = Schema({
  nombre: {
    type: String,
    require: true,
  },
  img: {
    type: String
  },
  usuario: {
    type: Schema.Types.ObjectId,
    ref: 'Usuario'
  },
  hospital: {
    type: Schema.Types.ObjectId,
    ref: 'Hospital'
  }
}, { collection: 'medicos' });

module.exports = model('Medico', MedicoSchema);
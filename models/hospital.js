const { Schema, model } = require('mongoose');

const HospitalSchema = Schema({
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
  }
}, { collection: 'hospitales' });

module.exports = model('Hospital', HospitalSchema);
const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
  _id: {
    type: Number,
    require: true,
    unique: true,
  },
  nombre: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true
  },
  img: {
    type: String
  },
  role: {
    type: String,
    require: true,
    default: 'USER_ROLE'
  },
  google: {
    type: Boolean,
    default: false
  }
});

module.exports = model('Usuario', UsuarioSchema);
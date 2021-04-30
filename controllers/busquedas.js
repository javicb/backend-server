const { response } = require("express");

const getSearchGlobal = (request, resp = response) => {
  const busqueda = request.params.busqueda;

  resp.json({
    ok: true,
    msg: 'getSearchGlobal',
    busqueda
  })
}

module.exports = {
  getSearchGlobal
}
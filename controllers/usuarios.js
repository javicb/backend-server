
const getUsuarios = (request, response) => {
  response.json({
    ok: true,
    usuarios: []
  })
}

module.exports = {
  getUsuarios
}
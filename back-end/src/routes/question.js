const express = require('express')
const router = express.Router()

const database = require('../database')
const game = require('../game')

// Retorna uma nova pergunta
router.get('/', (request, response) => {
  return response.json(
    game.getRamdomQuestion(database.banco_questoes)
  )
})

// Recebe a resposta escolhida e retorna os indicadores atualizados
router.post('/', (request, response) => {
  const { idQuestion, idAlternative } = request.body

  const result = game.play(idQuestion, idAlternative)

  return response.json(result)
})

module.exports = router
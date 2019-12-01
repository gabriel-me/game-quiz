const database = require('./database')

const game = {
  satisfaction: 0,
  loyalty: 0,
  questionsSent: 0,
  maxQuestionsSent: 9,

  resetGame() {
    this.questionsSent = 0
    this.satisfaction = 0
    this.loyalty = 0
  },
  
  updateQuestionsSent() {
    this.questionsSent++
  },

  updateIndicators(satisfaction, loyalty) {
    this.satisfaction += satisfaction
    this.loyalty += loyalty
  },

  getRamdomQuestion(questions) {
    const maxIndex = 14
    const ramdomIndex = Math.floor(Math.random() * maxIndex + 1)
    return questions[ramdomIndex]
  },

  getIndicators() {
    return {
      satisfaction: this.satisfaction,
      loyalty: this.loyalty
    }
  },

  findQuestionById(id) {
    const question = database.banco_questoes.filter(question => question.id === id)[0]
    return question
  },

  findAlternativeById(idQuestion, idAlternative) {
    const question = this.findQuestionById(idQuestion)
    const alternative = question.alternativas.filter(alternative => alternative.id === idAlternative)[0]
    return alternative
  },
  
  play(idQuestion, idAlternative) {
    if (this.questionsSent > this.maxQuestionsSent) {
      const finalResult = this.getIndicators()
      this.resetGame()
      return {
        finished: true,
        indicators: finalResult
      }
    }

    const selectedAlternative = this.findAlternativeById(idQuestion, idAlternative)
    const indicators = selectedAlternative.impacto_indicadores    

    this.updateQuestionsSent()

    this.updateIndicators(
      indicators.satisfacao, 
      indicators.fidelizacao
    )

    return {
      finished: false,
      indicators: this.getIndicators()
    }
  }
}

module.exports = game
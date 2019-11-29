import React from 'react'
import Button from '../../components/Button'
import ProgressBar from '../../components/ProgressBar'
import Question from '../../components/Question'

const questao = {
			"id": "Q1",
			"pergunta": "pergunta 1",
			"alternativas": 
			[
				{
					"id": "Q1_A1",
					"descricao": "Alternativa 1",
					"impacto_indicadores": {
						"satisfacao": 4,
						"fidelizacao": 0
					}

				},
				{
					"id": "Q1_A2",
					"descricao": "Alternativa 2",
					"impacto_indicadores": {
						"satisfacao": 3,
						"fidelizacao": 2
					}
				},
				{
					"id": "Q1_A3",
					"descricao": "Alternativa 3",
					"impacto_indicadores": {
						"satisfacao": 4,
						"fidelizacao": 1
					}
				}
			]
		}

export default () => 
  <>
    <ProgressBar />
    <Question question={questao} />
		<Button />
  </>
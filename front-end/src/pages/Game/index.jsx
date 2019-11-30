import React from 'react'
import Button from '../../components/Button'
import Question from '../../components/Question'
import Indicator from '../../components/Indicator'
import Art from './arte_quiz.png'
import './styles.css'

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
	<div className="game">
		<img src={Art} alt="Art"/>
		<Indicator />
		<div className="box">
			<Question question={questao} />
			<footer>
				<Button label="CONFIRMAR" />
			</footer>
		</div>
	</div>
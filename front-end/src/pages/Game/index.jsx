import React from 'react'
import Button from '../../components/Button'
import Question from '../../components/Question'
import Indicator from '../../components/Indicator'
import Art from './arte_quiz.png'
import './styles.css'

const gameQuizEndpoint = 'http://localhost:8082/question/'

export default class extends React.Component {
	constructor() {
		super()
		this.state = {
			question: {},
			satisfaction: 0,
			loyalty: 0
		}
		this.requestQuestion = this.requestQuestion.bind(this)
		this.sendReply = this.sendReply.bind(this)
		this.renderIndicator = this.renderIndicator.bind(this)
		this.renderQuestion = this.renderQuestion.bind(this)
		this.requestQuestion()
	}
	
	async requestQuestion() { 
		const response = await fetch(gameQuizEndpoint)

		if (response.status === 200) {
			const question = await response.json() 
			this.renderQuestion(question)
		}
	}

	async sendReply(event) {
		event.preventDefault()

		const $selectedAlternative = document.querySelector('.selected-alternative')
		
		const requestConfig = {
			method: 'POST',
			mode: 'cors',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				idQuestion: this.state.question.id,
				idAlternative: $selectedAlternative.id
			})
		}

		const response = await fetch(gameQuizEndpoint, requestConfig)
		const result = await response.json()
		const indicator = result.indicators
		const finished = result.finished

		if (finished) {
			localStorage.setItem('satisfaction', indicator.satisfaction)
			localStorage.setItem('loyalty', indicator.loyalty)
			this.props.history.push('/result');
		}
			
		this.renderIndicator(
			indicator.satisfaction, 
			indicator.loyalty
		)

		await this.requestQuestion()
	}

	renderQuestion(question) {
		this.setState({
			...this.state,
			question: question
		})
	}

	renderIndicator(satisfaction, loyalty) {
		this.setState({
			...this.state,
			satisfaction: satisfaction,
			loyalty: loyalty
		})
	}
	
	render() {
		return (
			<form method="POST" onSubmit={this.sendReply}>
				<div className="game">
					<img src={Art} alt="Art"/>
					<Indicator bar1={this.state.satisfaction} bar2={this.state.loyalty} />
					<div className="box">
						<Question question={this.state.question} />
						<footer>
							<Button label="CONFIRMAR" />
						</footer>
					</div>
				</div>
			</form>
		)
	}
}
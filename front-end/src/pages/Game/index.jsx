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
		this.bindMethods = this.bindMethods.bind(this)
		this.bindMethods()
		this.handleQuestion()
	}
	
	bindMethods() {
		this.sendReply = this.sendReply.bind(this)
		this.requestQuestion = this.requestQuestion.bind(this)
		this.renderIndicators = this.renderIndicators.bind(this)
		this.renderQuestion = this.renderQuestion.bind(this)
		this.handleQuestion = this.handleQuestion.bind(this)
		this.handleIndicators = this.handleIndicators.bind(this)
		this.getSelectedAlternativeId = this.getSelectedAlternativeId.bind(this)
	}
	
	async requestQuestion() { 
		const response = await fetch(gameQuizEndpoint)
		const question = await response.json()
		return question
	}

	async sendReply(selectedAlternativeId) {
		const requestConfig = {
			method: 'POST',
			mode: 'cors',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				idQuestion: this.state.question.id,
				idAlternative: selectedAlternativeId
			})
		}
	
		const response = await fetch(gameQuizEndpoint, requestConfig)
		const result = await response.json()
		return result
	}

	async handleQuestion() {
		const question = await this.requestQuestion()
		this.renderQuestion(question)
	}

	async handleIndicators(event) {
		event.preventDefault()
		const selectedAlternativeId = this.getSelectedAlternativeId()
		
		if (selectedAlternativeId) {
			const result = await this.sendReply(selectedAlternativeId)
			const indicator = result.indicators
			const finished = result.finished
		
			if (finished) {
				localStorage.setItem('satisfaction', indicator.satisfaction)
				localStorage.setItem('loyalty', indicator.loyalty)
				this.props.history.push('/result');
			}
					
			this.renderIndicators(
				indicator.satisfaction, 
				indicator.loyalty
			)
		
			await this.handleQuestion()
		}
	}

	renderQuestion(question) {
		this.setState({
			...this.state,
			question: question
		})
	}

	renderIndicators(satisfaction, loyalty) {
		this.setState({
			...this.state,
			satisfaction: satisfaction,
			loyalty: loyalty
		})
	}

	getSelectedAlternativeId() {
		const $selectedAlternative = document.querySelector('.selected-alternative')
		if ($selectedAlternative) 
			return $selectedAlternative.id
		return false
	}
	
	render() {
		return (
			<form method="POST" onSubmit={this.handleIndicators}>
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
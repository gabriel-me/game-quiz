import React from 'react'
import Indicator from '../../components/Indicator'
import IndicatorImage from './arte_indicadores.png'
import './styles.css'

export default class extends React.Component {
  constructor() {
    super()
    this.state = {
      satisfaction: 0,
      loyalty: 0
    }
  }

  componentDidMount() {
    this.setState({
      ...this.state,
      satisfaction: window.localStorage.getItem('satisfaction'),
      loyalty: window.localStorage.getItem('loyalty')
    })
  }
  
  render() {
    return (
      <div className="result">
        <div className="box">
          <header>
            <img src={IndicatorImage} alt="art"/>
            <h1>Veja sua performance em cada indicador:</h1>
          </header>
          <Indicator bar1={this.state.satisfaction} bar2={this.state.loyalty} />
        </div>
      </div>
    )
  }
}  
import React from 'react'
import Alternative from './Alternative'
import Text from '../../components/Text'
import './styles.css'

function renderAlternatives(alternatives) {
  const alternativeLetter = ['A', 'B', 'C']

  const allAlternatives = alternatives.map((alternative, i) => 
    <Alternative 
      key={i} 
      id={alternative.id}
      letter={alternativeLetter[i]}
      text={alternative.descricao} 
    />
  )

  return allAlternatives
}
  
export default props => 
  <div className="question">
    <Text text={props.question.pergunta || '...'} />
    {props.question.alternativas ? renderAlternatives(props.question.alternativas) : ''}
  </div>
import React from 'react'
import Alternative from './Alternative'
import Text from '../../components/Text'
import './styles.css'

function renderAlternatives(alternatives) {
  const alternativeLetter = ['A', 'B', 'C']

  const allAlternatives = alternatives.map((alternative, i) => 
    <Alternative 
      key={i} 
      letter={alternativeLetter[i]}
      text={alternative.descricao} 
    />
  )

  return allAlternatives
}
  
export default props => 
  <div className="question">
    <Text text={props.question.pergunta} />
    {renderAlternatives(props.question.alternativas)}
  </div>
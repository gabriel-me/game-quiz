import React from 'react'
import Text from '../../Text'
import './styles.css'

function unSelectAllAlterntives() {
  const $alternatives = document.querySelectorAll('.alternative')
  $alternatives.forEach($alternative => {
    $alternative.classList = 'alternative'
  })
}

function selectAlternative(alternativeId) {
  unSelectAllAlterntives()
  const $selectedAlternative = document.getElementById(alternativeId)
  $selectedAlternative.classList = 'alternative selected-alternative'
}

export default props =>
  <div 
  id={props.id}
  onClick={() => selectAlternative(props.id)} 
  className="alternative"
  >
    <h3>{props.letter || 'A'}</h3>
    <Text text={props.text || 'Alternative'} />
  </div>
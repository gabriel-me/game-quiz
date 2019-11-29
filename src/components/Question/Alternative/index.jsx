import React, { useState } from 'react'
import Text from '../../Text'
import './styles.css'

export default function(props) {
  const [alternativeState, setAlternative] = useState(null)

  function selectAlternative() {
    alternativeState !== 'selected-alternative'
      ? setAlternative('selected-alternative') 
      : setAlternative('')
  }

  return (
    <div 
      id={props.id}
      onClick={selectAlternative} 
      className={`alternative ${alternativeState || ''}`}
    >
      <h3>{props.letter || 'A'}</h3>
      <Text text={props.text || 'Alternative'} />
    </div>
  )
}  
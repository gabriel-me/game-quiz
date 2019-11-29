import React from 'react'
import Text from '../../Text'
import './styles.css'

export default props => 
  <div className={`alternative ${props.select ? 'selected-alternative' : ''}`}>
    <h3>{props.letter || 'A'}</h3>
    <Text text={props.text || 'Alternative'} />
  </div>
import React from 'react'
import './styles.css'

export default props => 
  <button className="button">
    <p>{props.label || 'Button'}</p>
  </button>
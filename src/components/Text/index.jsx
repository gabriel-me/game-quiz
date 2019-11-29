import React from 'react'
import './styles.css'

const LoremIpsum = 'Lorem Ipsum.'

export default props => 
  <p className="text">
    {props.text || LoremIpsum}
  </p>
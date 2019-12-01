import React from 'react'
import './styles.css'

export default props => {
  const width = props.width || '0'
  const color = props.color || '#433D95'

  const style = { 
    width: `${width}%`,
    backgroundColor: color 
  }

  return (
    <div className="progress">
      <div className="progress-bar" style={style}></div>
    </div>
  ) 
}
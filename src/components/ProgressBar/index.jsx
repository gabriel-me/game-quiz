import React from 'react'
import './styles.css'

export default props => {
  const width = props.width || '25'
  const color = props.color || '#045FB4'

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
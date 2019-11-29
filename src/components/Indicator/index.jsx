import React from 'react'
import ProgressBar from '../ProgressBar/'
import './styles.css'

export default props => 
  <div className="indicator">
    <section>
      <p>Satisfação do Cliente</p>
      <ProgressBar width={props.bar1} />
    </section>
    <section>
      <p>Fidelização</p>
      <ProgressBar width={props.bar2} color="rebeccapurple" />
    </section>
  </div>
import React from 'react'
import ProgressBar from '../ProgressBar/'
import IndicatorArt from './arte_indicadores.png'
import './styles.css'

export default props => 
  <div className="indicator">
    <img src={IndicatorArt} alt="Indicator"/>
    <div>
      <section>
        <p>Satisfação do Cliente</p>
        <ProgressBar width={props.bar1} />
      </section>
      <section>
        <p>Fidelização</p>
        <ProgressBar width={props.bar2} color="#722D7E" />
      </section>
    </div>
  </div>
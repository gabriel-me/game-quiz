import React from 'react'
import { Link } from 'react-router-dom'
import Indicator from '../../components/Indicator'
import Button from '../../components/Button'
import './styles.css'

export default () => 
  <div className="tutorial">
    <div className="box">
      <Indicator bar1="5" bar2="5" />
      <main>
        <article>
        <p>Ao lado, estão os três indicadores do game. Quando você tomar suas decisões, eles poderão 
           aumentar ou diminuir. Por isso, acompanhe-os para saber sua evolução no jogo.
        </p>
        <p>Você iniciará o game com os indicadores zerados. No decorrer do jogo, eles serão impactados 
           por todas as suas decisões. Então, ﬁque atento!
        </p>
        <p>Antes de resolver cada situação, reﬂita como suas escolhas podem inﬂuenciar os indicadores.</p>
        </article>
        <Indicator bar1="40" bar2="60" />
      </main>
      <footer>
        <Link to="/game">
          <Button label="CONTINUAR" />
        </Link>
      </footer>
    </div>
  </div>
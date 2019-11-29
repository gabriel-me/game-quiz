import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import './styles.css'

export default () => 
  <div className="home">
    <main>
      <h1>Game Quiz</h1>
      <p>Seja bem-vindo(a)! A partir de agora,você terá a oportunidade de colocar
         em prática tudo o que já aprendeu. Para isso, será necessário superar alguns
         desaﬁos, tomando a <mark>melhor decisão para você, para o cliente e para o 
         negócio</mark>. Está preparado? 
      </p>
      <Link to="/game">
        <Button label="Clique aqui para aceitar o desaﬁo!" />
      </Link>
    </main>   
  </div>
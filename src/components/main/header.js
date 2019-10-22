import React from 'react'
import { Button } from 'react-bootstrap'

const Header = () => (
  <header>
    <a href={'/'}>Hacktober Fest 2019 Vitta</a>
    <h1>
      Apoie nossos projetos <a href={'/'}>open source</a> e ganhe uma camiseta exclusiva
    </h1>
    <Button onClick={() => alert(true)}>Show Alert</Button>
  </header>
)

export default Header

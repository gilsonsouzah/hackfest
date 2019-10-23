import React from 'react'
import styled from 'styled-components'

import { Button, Row, Col, Card } from 'react-bootstrap'

const Titulo = styled.div`
  font-size: 30px;
  color: #327dff;
`

const Ul = styled.ul`
  list-style: none;
  padding-left: 0;
`

const Vitta = styled.div``

const Footer = () => (
  <footer style={{ height: 500 }}>
    <Titulo>Por que acreditamos</Titulo>
    <Titulo>em projetos open source</Titulo>
    <Ul>
      <li> - Compartilhar código é o que nos une;</li>
      <li> - Devolver para a sociedade;</li>
      <li> - OpenSource é livre de discriminações e preconceitos;</li>
      <li> - OpenSource é Inclusão Social;</li>
      <li> - Espaço democrático e aberto a todos;</li>
    </Ul>
    <Button>conheça mais sobre a Vitta</Button>
    <Vitta>Vitta Tecnologia em Saúde S.A. - {new Date().getFullYear()}</Vitta>
  </footer>
)

export default Footer

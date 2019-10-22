import React from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'

const Header = () => (
  <Container>
    <Row>
      <Col>
        <a class={'logo'} href={'/'}>
          <span class="sr-only">Hacktober Fest 2019 Vitta</span>
        </a>
        <h1 class={'heroTitle'}>
          Apoie nossos projetos <a href={'/'}>open source</a> e ganhe uma camiseta
          exclusiva
        </h1>
        <Button class={'heroButton'} variant={'outline-dark'} onClick={() => alert(true)}>
          conheça os projetos
        </Button>
      </Col>
      <Col>imagem</Col>
    </Row>
  </Container>
)

export default Header

import React from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'

const Header = () => (
  <Container style={{ width: '100%' }}>
    <Row>
      <Col>
        <a className={'logo'} href={'/'}>
<<<<<<< Updated upstream
          <span className="sr-only">Hacktober Fest 2019 Vitta</span>
=======
          <span class="sr-only">Hacktober Fest 2019 Vitta</span>
>>>>>>> Stashed changes
        </a>
        <h1 className={'heroTitle'}>
          Apoie nossos projetos <a href={'/'}>open source</a> e ganhe uma camiseta
          exclusiva
        </h1>
        <Button
          className={'heroButton'}
          variant={'outline-dark'}
          onClick={() => alert(true)}
        >
          conheça os projetos
        </Button>
      </Col>
      <Col>
        <img src="/images/vitta_developer.png" alt="" />
      </Col>
    </Row>
  </Container>
)

export default Header

import React from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'

const Header = () => (
  <Container>
    <Row>
      <Col md={6} style={{ maxWidth: '480px' }}>
        <a className={'logo'} href={'/'}>
          <span className="sr-only">Hacktober Fest 2019 Vitta</span>
        </a>
        <h1 className={'heroTitle'}>
          Apoie nossos projetos <a href={'/'}>open source</a> e ganhe uma camiseta
          exclusiva
        </h1>
        <Button
          className={'heroButton '}
          variant={'outline-dark'}
          onClick={() => alert(true)}
        >
          conheça os projetos
        </Button>
      </Col>
      <Col md={6} className={'heroImages d-sm-none dxs-none d-md-block'}>
        <img src="/images/vitta_developer.png" alt="" />
      </Col>
    </Row>
  </Container>
)

export default Header

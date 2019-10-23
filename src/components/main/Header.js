import React from 'react'
import authService from '../../authService'
import { Button, Container, Row, Col } from 'react-bootstrap'

const loginUser = () => {
  try {
    const user = authService.getUser();
    localStorage.setItem("user", JSON.stringify(user));
  } catch (err) {

  }
}

const Header = () => (
  <Container>
    <Row>
      <Col md={6} style={{ maxWidth: '600px' }}>
        <a className={'logo'} href={'/'}>
          <span className="sr-only">Hacktober Fest 2019 Vitta</span>
        </a>
        <h1 className={'heroTitle'}>
          Apoie nossos projetos <a href={'/'}>open source</a> e ganhe uma camiseta
          exclusiva
        </h1>
        <Button
          className={'heroButton'}
          variant={'outline-dark'}
          href='#projects'
        >
          conheça os projetos
        </Button>
        <Button
        style={{marginLeft: '20px'}}
          className={'heroButton'} 
          onClick={() => loginUser()} 
          variant='outline-dark'
        >
          <img src="/images/github.png" style={{ marginRight: '5px', height: '20px' }} /> login
        </Button>
      </Col>
      <Col md={6} className={'heroImages d-sm-none dxs-none d-md-block'}>
        <img src="/images/vitta_developer.png" alt="" />
      </Col>
    </Row>
  </Container>
)

export default Header

import React from 'react'
import authService from '../../authService'
import { Button, Container, Row, Col } from 'react-bootstrap'

const loginUser = async () => {
  try {
    const user = authService.getUser()
    localStorage.setItem('user', JSON.stringify(user))
  } catch (err) {}
}

const Header = () => (
  <Container>
    <Row>
      <Col md={6} style={{ maxWidth: '600px', paddingBottom: '116px' }}>
        <a className={'logo'} href={'/'}>
          <span className="sr-only">Hacktober Fest 2019 Vitta</span>
        </a>
        <h1 className={'heroTitle'}>
          Apoie nossos projetos <a href={'/'}>open source</a> e ganhe uma camiseta
          exclusiva
        </h1>
        <Button
          className={'heroButton'}
          style={{ margin: '0 20px 20px 0' }}
          variant={'outline-dark'}
          href="#projects"
        >
          conheça os projetos
        </Button>
        <Button
          className={'heroButton'}
          onClick={() => loginUser()}
          variant="outline-dark"
        >
          <img src="/images/github.png" style={{ height: '18px' }} /> login
        </Button>
      </Col>
      <Col md={6} className={'heroImages d-none d-md-block'}>
        <img
          src="/images/vitta_developer.png"
          srcset="/images/vitta_developer@2x.png 2x,
            /images/vitta_developer.png 1x"
          alt=""
        />
      </Col>
    </Row>
  </Container>
)

export default Header

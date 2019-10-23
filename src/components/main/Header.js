import React from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import { Helmet } from 'react-helmet'
import Logo from '../Logo'

const Header = () => (
  <Container>
    <Helmet>
      <meta charSet="utf-8" />
      <title>HackFest 2019 - Vitta</title>
      <link rel="canonical" href="http://hack.vitta.me" />
    </Helmet>
    <Row>
      <Col md={6} style={{ maxWidth: '600px', paddingBottom: '116px' }}>
        <Logo />
        <h1 className={'heroTitle'}>
          Apoie nossos projetos <br />
          <a href={'/'}>open source</a> e ganhe uma camiseta exclusiva
        </h1>
        <Button
          className={'heroButton'}
          style={{ margin: '0 20px 20px 0' }}
          variant={'outline-dark'}
          href="#projects"
        >
          conheça os projetos
        </Button>
      </Col>
      <Col md={6} className={'heroImages d-none d-md-block'}>
        <img
          src="/images/vitta_developer.png"
          srcSet="/images/vitta_developer@2x.png 2x,
            /images/vitta_developer.png 1x"
          alt=""
        />
      </Col>
    </Row>
  </Container>
)

export default Header

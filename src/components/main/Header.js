import React from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import Img from 'gatsby-image';
import { graphql } from "gatsby"

const Header = ({data}) => (
  <Container fluid={true}>
    <Row>
      <img src="/images/github.png" /> Login
    </Row>
    <Row>
      <Col md={6} style={{ maxWitdh: '100px' }}>
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
          onClick={() => alert(true)}
        >
          conheça os projetos
        </Button>
      </Col>
      <Col md={6} className={'heroImages'}>
        <img src="/images/vitta_developer.png" alt="" />
      </Col>
    </Row>
  </Container>
)

export default Header

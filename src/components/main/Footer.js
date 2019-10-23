import React from 'react'
import styled from 'styled-components'

import { Button, Row, Col, Container } from 'react-bootstrap'

const Titulo = styled.h2`
  font: normal 30px/39px Roboto Mono;
  color: #327dff;
  margin: 35px 0;
`

const Ul = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-bottom: 48px;
`

const Vitta = styled.p`
  background: url('/images/vitta.png') left center no-repeat;
  font: normal 10px/32px Roboto Mono;
  letter-spacing: 1px;
  padding-left: 40px;
  margin: -27px 0 71px;
`

const Footer = () => (
  <Container style={{ marginTop: '46px' }}>
    <Row>
      <Col md={6} sm={9}>
        <Titulo>
          Por que acreditamos
          <br />
          em projetos open source
        </Titulo>
        <Ul>
          <li> - Compartilhar código é o que nos une;</li>
          <li> - Devolver para a sociedade;</li>
          <li> - OpenSource é livre de discriminações e preconceitos;</li>
          <li> - OpenSource é Inclusão Social;</li>
          <li> - Espaço democrático e aberto a todos;</li>
        </Ul>
        <Button
          className={'heroButton'}
          href={'https://vitta.com.br/?utm_source=hacktober_site'}
          target={'_blank'}
          variant={'outline-dark'}
        >
          conheça mais sobre a Vitta
        </Button>
        <Vitta>Vitta Tecnologia em Saúde S.A. - {new Date().getFullYear()}</Vitta>
      </Col>
      <Col md={6} sm={3} className={'d-none d-sm-block'}>
        <img style={{ maxWidth: '100%' }} src={'/images/open-source.svg'} alt={''} />
      </Col>
    </Row>
  </Container>
)

export default Footer

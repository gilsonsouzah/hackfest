import React from 'react'
import styled from 'styled-components'
import { Button, Container, Row, Col } from 'react-bootstrap'

const DivPrincipal = styled.div`
  max-width: 600px;
  display: flex;
  flex-flow: row;
  flex-direction: column;
`

const TitleForm = styled.h2`
  font-size: 42px;
  color: #454750;
  font-weight: 400;
  line-height: 58px;
`

const Input = styled.input`
  margin-top: 50px;
  padding: 0 0 15px 2px;
  font-size: 16px;
  outline: none;
  border: none;
  background-color: #eceef0;
  border-bottom: 1px solid #454750;
`

const Footer = styled.div`
  margin: 80px 0 50px;
`

const Ul = styled.ul`
  padding: 0;
`

const Li = styled.li`
  color: #71737e;
  letter-spacing: 1.1px;
  font-size: 11px;
  list-style: none;
  padding: 0;
  line-height: 22px;
`

const Register = () => (
  <DivPrincipal>
    <TitleForm>
      <span style={{ color: '#2881FF', fontWeight: 500 }}>Cadastre-se</span>
      <br />
      para enviarmos
      <br />
      sua camiseta
    </TitleForm>

    <Input placeholder="seu nome completo" />
    <Input placeholder="seu e-mail" />
    <Input placeholder="seu cep" />
    <Input placeholder="seu endereço completo" />

    <Footer>
      <Container>
        <Row className={'justify-content-between'}>
          <Col className={'pa-0 mb-3'} md={'auto'} sm={12}>
            <Button variant={'outline-dark'} onClick={() => alert(true)}>
              cadastrar
            </Button>
          </Col>
          <Col className={'pa-0'} md={'auto'} sm={12}>
            <Ul>
              <Li>* Você deve residir no Brasil;</Li>
              <Li>* Seu PR deve ser aceito;</Li>
            </Ul>
          </Col>
        </Row>
        <Row></Row>
      </Container>
    </Footer>
  </DivPrincipal>
)

export default Register

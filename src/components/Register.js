import React from 'react'
import styled from 'styled-components'
import { Button } from 'react-bootstrap'

const DivPrincipal = styled.div`
  max-width: 600px;
  display: flex;
  flex-flow: row;
  flex-direction: column;
  margin: 20px;
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
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
`

const Ul = styled.ul`
  margin: 0;
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
      <Button variant={'outline-dark'} onClick={() => alert(true)}>
        cadastrar
      </Button>
      <Ul>
        <Li>* Você deve residir no Brasil;</Li>
        <Li>* Seu PR deve ser aceito;</Li>
      </Ul>
    </Footer>
  </DivPrincipal>
)

export default Register

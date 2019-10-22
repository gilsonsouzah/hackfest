import React from 'react'
import styled from 'styled-components'

const DivPrincipal = styled.div`
  max-width: 600px;
  display: flex;
  flex-flow: row;
  flex-direction: column;
  margin: 20px;
`

const P = styled.p`
  width: 100%;
  height: 40px;
  font-size: 42px;
  color: '#454750';
`

const Input = styled.input`
  margin-top: 50px;
  padding: 0 0 20px 2px;
  font-size: 16px;
  outline: none;
  border: none;
  border-bottom: 1px solid #454750;
`

const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
`

const Button = styled.button`
  width: 200px;
  height: 47px;
  background: none;
  border: 1px solid #454750;
  color: #454750;
  outline: none;
  box-shadow: 5px 5px;

  :focus {
    outline: 0;
  }
`

const Ul = styled.ul``

const Li = styled.li`
  color: #71737E;
`

const Register = () => (
  <DivPrincipal>
    <P style={{ color: '#2881FF' }}>Cadastre-se</P>
    <P>para enviarmos</P>
    <P>sua camiseta</P>

    <Input placeholder="seu nome completo" />
    <Input placeholder="seu e-mail" />
    <Input placeholder="seu cep" />
    <Input placeholder="seu endereço completo" />

    <Footer>
      <Button>cadastrar</Button>
      <Ul>
        <Li>Você deve residir no Brasil;</Li>
        <Li>Seu PR deve ser aceito;</Li>
      </Ul>
    </Footer>
  </DivPrincipal>
)

export default Register

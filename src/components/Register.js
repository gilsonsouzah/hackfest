import React, { useState } from 'react'
import styled from 'styled-components'
import { Button, Container, Row, Col } from 'react-bootstrap'

import { getUser, sendUser } from '../service'

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

const Register = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    postalCode: '',
    address: '',
    photoUrl: ''
  })

  const loginUser = async () => {
    try {
      if (user.name) {
        setUser({
          name: '',
          email: '',
          postalCode: '',
          address: '',
          photoUrl: ''
        })
        return
      }
      const githubUser = await getUser()
      console.log('user fetched --', githubUser)
      localStorage.setItem('user', JSON.stringify(githubUser))
      setUser({
        ...user,
        photoUrl: githubUser.photoUrl,
        name: githubUser.name,
        email: githubUser.email || user.email
      })
    } catch (err) {
      console.error(err)
    }
  }

  const isInvalidObjectFields = obj =>
    Object.keys(obj).some(key => {
      return obj[key] === null || obj[key] === undefined || obj[key] === ''
    })

  const submitForm = async () => {
    if (isInvalidObjectFields(user)) {
      console.log('--- no data -- ')
      return
    }

    const result = await sendUser(user)

    alert(JSON.stringify(result))
  }

  return (
    <DivPrincipal>
      <TitleForm>
        <span style={{ color: '#2881FF', fontWeight: 500 }}>Cadastre-se</span>
        <br />
        para enviarmos
        <br />
        sua camiseta
      </TitleForm>

      <Input
        placeholder="seu nome completo"
        value={user.name}
        onChange={event => setUser({ ...user, name: event.target.value })}
      />
      <Input
        placeholder="seu e-mail"
        value={user.email}
        onChange={event => setUser({ ...user, email: event.target.value })}
      />
      <Input
        placeholder="seu cep"
        value={user.postalCode}
        onChange={event =>
          setUser({
            ...user,
            postalCode: event.target.value.replace(/([0-9]{5})([\d]{3})/, '$1-$2')
          })
        }
      />
      <Input
        placeholder="seu endereço completo"
        value={user.address}
        onChange={event => setUser({ ...user, address: event.target.value })}
      />

      <Footer>
        <Container>
          <Row className={'justify-content-between'}>
            <Col className={'pa-0 mb-3'} sm={12}>
              <Button
                className={'heroButton'}
                onClick={() => loginUser()}
                variant="outline-dark"
              >
                <img
                  src={user.photoUrl || '/images/github.png'}
                  style={{ height: '18px', borderRadius: 50 }}
                />{' '}
                {user.name.split(' ')[0] || 'conectar'}
              </Button>
              <Button
                className={'ml-3'}
                variant={'outline-dark'}
                onClick={() => submitForm()}
              >
                cadastrar
              </Button>
            </Col>
            <Col className={'pa-0'} md={'auto'} sm={12}>
              <Ul>
                <Li>* Você deve residir no Brasil;</Li>
                <Li>* Seu PR deve ser aceito;</Li>
                <Li>* Seu PR deve ser submetido até 23/11;</Li>
              </Ul>
            </Col>
          </Row>
          <Row></Row>
        </Container>
      </Footer>
    </DivPrincipal>
  )
}

export default Register

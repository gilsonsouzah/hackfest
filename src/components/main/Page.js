import React from 'react'
import { Container } from 'react-bootstrap'
import { Header, Body, Footer, Register } from '..'

const fluid = 'container-fluid'

const Page = () => (
 
  <Container>
    <Header className={fluid}></Header>
    <Body className={fluid}></Body>
    <Footer className={fluid}></Footer>
  </Container>
)

export default Page

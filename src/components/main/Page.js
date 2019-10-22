import React from 'react'
import { Container } from 'react-bootstrap'
import { Header, Body, Footer } from '..'

const fluid = 'container-fluid'

const Page = () => (
  <Container>
    <Header class={fluid}></Header>
    <Body class={fluid}></Body>
    <Footer class={fluid}></Footer>
  </Container>
)

export default Page

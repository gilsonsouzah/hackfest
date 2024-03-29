import React from 'react'
import { Container } from 'react-bootstrap'
import { Header, Body, Footer } from '..'

const Page = () => (
  <Container
    style={{ overflowX: 'hidden', paddingRight: 0, paddingLeft: 0 }}
    fluid={true}
  >
    <Header></Header>
    <Body></Body>
    <Footer></Footer>
  </Container>
)

export default Page

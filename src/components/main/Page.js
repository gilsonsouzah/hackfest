import React from 'react'
import styled from 'styled-components'

import { Header, Body, Footer } from '..'

const SCPage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background-color: brown;
`

const Page = () => (
  <SCPage>
    <Header></Header>
    <Body></Body>
    <Footer></Footer>
  </SCPage>
)

export default Page

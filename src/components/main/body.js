import React from 'react'
import styled from 'styled-components'
import { Card } from '../'

const SCBody = styled.div`
  width: 100%;
  height: 900px;
  background-color: #eceef0;
`

const SCDivHalfWidthSpace = styled.div`
  width: 50%;
  /* height: 100%; */
  background-color: red;
  border-right-color: black;
`

const Body = () => (
  <SCBody>
    <SCDivHalfWidthSpace>
      <Card title={'Amilton'}></Card>
      <Card title={'Amilton'}></Card>
    </SCDivHalfWidthSpace>
    <SCDivHalfWidthSpace></SCDivHalfWidthSpace>
  </SCBody>
)

export default Body

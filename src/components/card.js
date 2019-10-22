import React from 'react'
import styled from 'styled-components'

const SCCard = styled.div`
  background-color: pink;
  width: 80%;
  /* height: 100px; */
`

const Card = ({ title, tag, numberOfIssues, bodyContent, buttonText, buttonAction }) => (
  <SCCard>{title}</SCCard>
)

export default Card

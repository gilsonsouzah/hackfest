import React from 'react'
import styled from 'styled-components'

// import { graphql } from 'gatsby'

const SCCard = styled.div`
  background-color: pink;
  width: 80%;
  /* height: 100px; */
`

const Card = ({ data }) => (
  <SCCard>
    <h1>{data.repository.name}</h1> <span> #{data.repository.issues.totalCount} </span>
    <p>{data.repository.description}</p>
  </SCCard>
)
/*
const query = graphql`
  query {
    repository(owner: "vitta-health", name: "vi-ui") {
      name
      description
      issues(states: OPEN) {
        totalCount
      }
    }
  }
`*/

export default Card

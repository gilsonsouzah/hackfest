import React from 'react'
import { Card } from 'react-bootstrap'

const ProjCard = ({ data }) => (
  <Card>
    <h1>{data.repository.name}</h1> <span> #{data.repository.issues.totalCount} </span>
    <p>{data.repository.description}</p>
  </Card>
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

export default ProjCard

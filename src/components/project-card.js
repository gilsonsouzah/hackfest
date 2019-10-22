import React from 'react'
import { graphql } from 'gatsby'

export default ({ data }) => (
  <div>
    <h1>{data.repository.name}</h1> <span> #{data.repository.issues.totalCount} </span>
    <p>{data.repository.description}</p>
  </div>
)
/*
export const query = graphql`
  query {
    repository(owner: "vitta-health", name: "vi-ui") {
      name
      description
      issues(states: OPEN) {
        totalCount
      }
    }
  }
`
*/

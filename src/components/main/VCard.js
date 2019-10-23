import React from 'react'

import { Card, Button } from 'react-bootstrap'
import { StaticQuery, graphql } from 'gatsby'


export default () => <StaticQuery
query={graphql`
query {
  github {
    repository(owner: "vitta-health", name: "vi-ui") {
      name
      description
      url
      issues(states: OPEN) {
        totalCount
      }
    }
  }
}`}
render={data => (
  <Card
    style={{
      minWidth: 300,
      maxWidth: 400,
      height: 340,
      marginBottom: 50,
      border: 0
    }}
  >
    <Card.Body>
      <Card.Title>{data.github.repository.name}  #{ data.github.repository.issues.totalCount} issues</Card.Title>
      <Card.Text>
      {data.github.repository.description}
      </Card.Text>
      <Button
        className={'heroButton'}
        variant={'outline-dark'}
        href={data.github.repository.url}
      >
        contribuir
      </Button>
    </Card.Body>
  </Card>
)}
/>
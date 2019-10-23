import React from 'react'

import { Card, Button } from 'react-bootstrap'
import { graphql } from 'gatsby'

const VCard = ({data}) => (
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
      <Card.Title>{data.repository.name}</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk of the
        card's content.
      </Card.Text>
      <Button
        className={'heroButton'}
        variant={'outline-dark'}
        onClick={() => alert(true)}
      >
        contribuir
      </Button>
    </Card.Body>
  </Card>
)

export const query =  graphql`
query VCardQuery {
  github {
    repository(owner: "vitta-health", name: "vi-ui") {
      name
      description
      issues(states: OPEN) {
        totalCount
      }
    }
  }
}`

export default VCard

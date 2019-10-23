import React from 'react'

import { Card, Button } from 'react-bootstrap'

const VCard = () => (
  <Card
    style={{
      minWidth: 300,
      maxWidth: 400,
      height: 340,
      marginBottom: 50,
      border: 0
    }}
  >
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
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

export default VCard

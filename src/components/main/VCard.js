import React from 'react'

import { Card, Button } from 'react-bootstrap'

export default ({ project }) => (
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
      <Card.Title>{project.name}  #{ project.issues.totalCount} issues</Card.Title>
      <Card.Text>
      {project.description}
      </Card.Text>
      <Button
        variant={'outline-dark'}
        href={project.url}
      >
        contribuir
      </Button>
    </Card.Body>
  </Card>
);
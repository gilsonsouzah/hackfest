import React from 'react'

import { Card, Button } from 'react-bootstrap'

export default ({ project }) => (
  <Card
    style={{
      marginBottom: '50px',
      border: 0,
      padding: '20px'
    }}
  >
    <Card.Body>
      <Card.Title as={'h3'}>
        <span className={'CardProject'}>{project.name}</span>
        <span className={'CardIssues'}>#{project.issues.totalCount} issues</span>
      </Card.Title>
      <Card.Text>{project.description}</Card.Text>
      <Button target={'_blank'} variant={'outline-dark'} href={project.url}>
        contribuir
      </Button>
    </Card.Body>
  </Card>
)

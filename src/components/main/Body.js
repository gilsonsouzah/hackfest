import React from 'react'

import { Button, Row, Col, Card } from 'react-bootstrap'
import { Register } from '../'

const Body = () => (
  <Row style={{ backgroundColor: '#ECEEF0' }}>
    <Col style={{ paddingLeft: 40, paddingTop: 80 }}>
      <Row style={{ borderRight: '1px solid #BDC5CE' }}>
        <Col xs={12}>
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
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12}>
          <Card style={{ minWidth: 300, maxWidth: 400, height: 340, border: 0 }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Col>
    <Col style={{ paddingTop: 80 }}>
      <Register></Register>
    </Col>
  </Row>
)

export default Body

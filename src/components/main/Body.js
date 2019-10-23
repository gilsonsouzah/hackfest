import React from 'react'
import { graphql } from 'gatsby'
import { Button, Row, Col, Card } from 'react-bootstrap'
import { Register } from '../'

const Body = ({data}) => (
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
/*
export const GatsbyQuery =  graphql`
  query RepositoriesQuery  {
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
*/
export default Body

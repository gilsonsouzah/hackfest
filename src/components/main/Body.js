import React from 'react'

import { Row, Col, Container } from 'react-bootstrap'
import { Register, VCard, Projects } from '../'

const Body = ({ data }) => (
  <div style={{ backgroundColor: '#ECEEF0' }}>
    <Container>
      <Row id="projects">
        <Col style={{ paddingLeft: 40, paddingTop: 80 }}>
          <Row style={{ borderRight: '1px solid #BDC5CE' }}>
            <Projects> </Projects>
          </Row>
        </Col>
        <Col style={{ paddingTop: 80 }}>
          <Register></Register>
        </Col>
      </Row>
    </Container>
  </div>
)
export default Body

import React from 'react'

import { Row, Col, Container } from 'react-bootstrap'
import { Register, VCard, Projects } from '../'

const Body = ({ data }) => (
  <div style={{ backgroundColor: '#ECEEF0', paddingTop: 80, paddingBottom: 80 }}>
    <Container>
      <Row id="projects">
        <Col xs={{ order: 2 }}>
          <Register></Register>
        </Col>
        <Col xs={{ order: 1 }} style={{ paddingLeft: 40 }}>
          <Row style={{ borderRight: '1px solid #BDC5CE' }}>
            <Projects> </Projects>
          </Row>
        </Col>
      </Row>
    </Container>
  </div>
)
export default Body

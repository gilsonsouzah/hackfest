import React from 'react'
import styled from 'styled-components'

import { Row, Col, Container } from 'react-bootstrap'
import { Register, Projects } from '../'

const Separator = styled.div`
  height: 70 0px;
  width: 0;
  border-left: 1px solid #bdc5ce;
  display: block;
  margin 0 auto 30px
`

const Body = ({ data }) => (
  <div style={{ backgroundColor: '#ECEEF0', paddingTop: '80px', paddingBottom: '30px' }}>
    <Container>
      <Row id="projects" className="justify-content-between">
        <Col md="6" sm={{ order: 3 }}>
          <Register></Register>
        </Col>
        <Col md="1" className="d-none d-md-block" sm={{ order: 2 }}>
          <Separator />
        </Col>
        <Col md="5" sm="6" sm={{ order: 1 }}>
          <Projects> </Projects>
        </Col>
      </Row>
    </Container>
  </div>
)
export default Body

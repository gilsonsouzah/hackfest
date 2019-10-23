import React from 'react'

import { Row, Col } from 'react-bootstrap'
import { Register, VCard } from '../'

const Body = ({data}) => (
  <Row id="projects" style={{ backgroundColor: '#ECEEF0' }}>
    <Col style={{ paddingLeft: 40, paddingTop: 80 }}>
      <Row style={{ borderRight: '1px solid #BDC5CE' }}>
        <Col xs={12}>
          <VCard></VCard>
        </Col>
        <Col xs={12}>
          <VCard></VCard>
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
query {
  github {
    viewer {
      repositories(
        privacy: PUBLIC
        affiliations: OWNER
        isFork: false
        first: 100
      ) {
        nodes {
          name
          url
        }
      }
    }
  }
}`*/
export default Body

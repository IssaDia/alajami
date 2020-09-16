import React from 'react'
import { Row } from 'react-bootstrap'
import Col from 'react-bootstrap/Col'

export default function Title (props) {
  return (
    <Row>
      <Col xs={12} className='title-container'>
        <h2><span style={{ textTransform: 'uppercase' }}>{props.title}</span></h2>
      </Col>
    </Row>)
}

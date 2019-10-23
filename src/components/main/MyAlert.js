import React from 'react'
import { Alert } from 'react-bootstrap'

const MyAlert = props => {
  if (props.show) {
    // console.log('final', _show)
    return <Alert variant={props.variant}>{props.message}</Alert>
  }
  return null
}

export default MyAlert

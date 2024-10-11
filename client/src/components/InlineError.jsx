import React from 'react'

const InlineError = ({error}) => {
  return (
    <p style={{color: "red"}}>{error}</p>
  )
}

export default InlineError
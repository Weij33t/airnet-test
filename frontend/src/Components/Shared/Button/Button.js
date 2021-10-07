import React from 'react'

export const Button = ({ value, ...rest }) => {
  return <button {...rest}>{value}</button>
}

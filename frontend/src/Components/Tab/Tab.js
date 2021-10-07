import React from 'react'

export const Tab = ({ value, ...rest }) => {
  return <button {...rest}>{value}</button>
}

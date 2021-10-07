import React from 'react'

export const Select = ({ options, ...rest }) => {
  return (
    <select {...rest}>
      {options.map((type, index) => (
        <option key={type + index}>{type}</option>
      ))}
    </select>
  )
}

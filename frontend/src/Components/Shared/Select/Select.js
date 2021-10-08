import React from 'react'

import styles from './Select.module.css'

export const Select = ({ options, ...rest }) => {
  return (
    <select className={styles.Select} {...rest}>
      {options.map((type, index) => (
        <option key={type + index}>{type}</option>
      ))}
    </select>
  )
}

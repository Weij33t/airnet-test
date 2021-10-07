import React from 'react'
import styles from './Tabs.module.css'
import { Tab } from './../Tab/Tab'

export const Tabs = ({ selectedStatus, setStatus }) => {
  return (
    <div className={styles.Tabs}>
      <Tab
        value={'Входящие'}
        className={`${styles.Tab} ${
          selectedStatus === 'Входящая' ? styles.active : ''
        }`}
        onClick={setStatus}
        data-value={'Входящая'}
      />

      <Tab
        value={'Назначенные'}
        className={`${styles.Tab} ${
          selectedStatus === 'Назначенная' ? styles.active : ''
        }`}
        onClick={setStatus}
        data-value={'Назначенная'}
      />
      <Tab
        value={'Готово'}
        className={`${styles.Tab} ${
          selectedStatus === 'Готово' ? styles.active : ''
        }`}
        onClick={setStatus}
        data-value={'Готово'}
      />
      <Tab
        value={'Архив'}
        className={`${styles.Tab} ${
          selectedStatus === 'Архив' ? styles.active : ''
        }`}
        onClick={setStatus}
        data-value={'Архив'}
      />
    </div>
  )
}

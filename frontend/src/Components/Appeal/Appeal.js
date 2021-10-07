import React, { useState } from 'react'

import styles from './Appeal.module.css'
import { EditAppeal } from './../EditAppeal/EditAppeal'

export const Appeal = ({ appeal, ...props }) => {
  const [isEditMode, setIsEditMode] = useState(false)

  return (
    <>
      {isEditMode && (
        <EditAppeal
          setIsEditMode={setIsEditMode}
          appeal={appeal}
          updateAppeal={props.updateAppeal}
        />
      )}
      {!isEditMode && (
        <div className={styles.Appeal} onClick={() => setIsEditMode(true)}>
          <div className={styles.Status}>Статус: {appeal.app_status}</div>
          <div className={styles.Type}>Тип: {appeal.appeal_type}</div>
          <div className={styles.Text}>Текст: {appeal.appeal_text}</div>
          <div className={styles.Appoint}>
            Назначен: {new Date(appeal.appointed_date).toDateString()}
          </div>
          <div className={styles.Comment}>Комментарий:{appeal.comment}</div>
          <div className={styles.Date}>
            Создан:{new Date(appeal.created_date).toDateString()}
          </div>
        </div>
      )}
    </>
  )
}

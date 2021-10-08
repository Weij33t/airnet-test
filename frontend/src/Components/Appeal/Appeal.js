import React, { useState } from 'react'

import styles from './Appeal.module.css'
import { EditAppeal } from './../EditAppeal/EditAppeal'
import { formatDate } from './../../utils/utils'

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
        <div className={styles.Appeal}>
          <div className={styles.Edit} onClick={() => setIsEditMode(true)}>
            Изменить
          </div>

          <div className={styles.Status}>Статус: {appeal.app_status}</div>
          <div className={styles.Type}>Тип: {appeal.appeal_type}</div>
          <div className={styles.Text}>Текст: {appeal.appeal_text}</div>
          <div className={styles.Appoint}>
            Назначен: {formatDate(appeal.appointed_date)}
          </div>
          <div className={styles.Comment}>Комментарий: {appeal.comment}</div>
          <div className={styles.Date}>
            Создан: {formatDate(appeal.created_date)}
          </div>
        </div>
      )}
    </>
  )
}

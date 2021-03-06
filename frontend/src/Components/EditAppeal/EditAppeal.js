import React, { useState } from 'react'
import styles from './EditAppeal.module.css'
import { Input } from '../Shared/Input/Input'
import { Button } from '../Shared/Button/Button'
import { Select } from '../Shared/Select/Select'
import { formatDate } from './../../utils/utils'

const statusesSelect = ['Готово', 'Входящая', 'Назначенная', 'Архив']
export const EditAppeal = ({ setIsEditMode, appeal, updateAppeal }) => {
  const [fieldsToEdit, setFieldsToEdit] = useState({})

  const changeFields = (field, value) => {
    setFieldsToEdit({ ...fieldsToEdit, [field]: value })
  }

  return (
    <div className={styles.EditAppealForm}>
      <span
        className={styles.CloseEditForm}
        onClick={() => setIsEditMode(false)}
      >
        x
      </span>
      <div>
        <span>Статус задачи</span>{' '}
        <Select
          options={statusesSelect}
          onChange={(e) => changeFields('app_status', e.target.value)}
          defaultValue={appeal.app_status}
        />
      </div>
      <div>
        <span>Комментарий </span>{' '}
        <Input
          defaultValue={appeal?.comment}
          onChange={(e) => changeFields('comment', e.target.value)}
        />{' '}
      </div>
      {(appeal.app_status === 'Входящая' ||
        appeal.app_status === 'Назначенная') && (
        <div>
          <span>Дата назначения </span>{' '}
          <Input
            type={'date'}
            defaultValue={formatDate()}
            onChange={(e) => changeFields('appointed_date', e.target.value)}
          />{' '}
        </div>
      )}
      <Button
        value={'Изменить'}
        onClick={() => {
          updateAppeal(fieldsToEdit, appeal.id)
          setIsEditMode(false)
        }}
      />
    </div>
  )
}

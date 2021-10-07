import React from 'react'
import styles from './CreateAppeal.module.css'
import { Input } from './../Shared/Input/Input'
import { Button } from './../Shared/Button/Button'
import { Select } from './../Shared/Select'

const typesSelect = [' Звонок', 'Сайт', 'Email']
export const CreateAppeal = ({
  newAppeal,
  setIsCreateMode,
  changeNewAppeal,
  createAppeal,
}) => {
  console.log(setIsCreateMode)
  return (
    <div className={styles.CreateAppealForm}>
      <span
        className={styles.CloseCreateForm}
        onClick={() => setIsCreateMode(false)}
      >
        x
      </span>
      <div>
        <span>Дата создания</span>{' '}
        <Input
          onChange={(e) => changeNewAppeal('created_date', e.target.value)}
          type={'date'}
        />{' '}
      </div>
      <div>
        <span>Тип обращения</span>{' '}
        <Select
          options={typesSelect}
          onChange={(e) => changeNewAppeal('appeal_type', e.target.value)}
          value={newAppeal.appeal_type}
        />
      </div>
      <div>
        <span>Текст обращения</span>{' '}
        <Input
          onChange={(e) => changeNewAppeal('appeal_text', e.target.value)}
        />{' '}
      </div>
      <Button
        className={styles.CreateAppButton}
        value={'Создать'}
        onClick={createAppeal}
      />
    </div>
  )
}

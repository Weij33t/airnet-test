import React, { useEffect, useState } from 'react'
import { appealsApi } from './../../api/appealsApi'
import { Appeal } from './../Appeal/Appeal'

import styles from './Appeals.module.css'
import { Button } from './../Shared/Button/Button'
import { Tabs } from './../Tabs/Tabs'
import { CreateAppeal } from './../CreateAppeal/CreateAppeal'
import { formatDate } from './../../utils/utils'

export const Appeals = ({ userId }) => {
  const [appeals, setAppeals] = useState([])
  const [error, setError] = useState(null)
  const [selectedStatus, setSelectedStatus] = useState('Входящая')
  const [newAppeal, setNewAppeal] = useState({
    created_date: formatDate(new Date()),
    app_status: 'Входящая',
    appeal_type: 'Звонок',
    appeal_text: '',
    user_id: userId,
    appointed_date: formatDate(new Date()),
  })
  const [isCreateMode, setIsCreateMode] = useState(false)

  useEffect(() => {
    ;(async () => {
      fetchAppeals()
    })()
  }, [])

  const fetchAppeals = async () => {
    const response = await appealsApi.getAppeals(userId)
    if (!response) setError(response.statusText)
    const data = await response.json()
    setAppeals(data)
  }
  const setStatus = (e) => setSelectedStatus(e.target.dataset.value)

  const changeNewAppeal = (field, value) => {
    setNewAppeal({
      ...newAppeal,
      [field]: value,
      app_status: selectedStatus,
    })
  }

  const createAppeal = async () => {
    await appealsApi.createAppeal(newAppeal)
    setIsCreateMode(false)
    fetchAppeals()
    setNewAppeal({
      created_date: formatDate(new Date()),
      app_status: 'Входящая',
      appeal_type: 'Звонок',
      appeal_text: '',
      user_id: userId,
      appointed_date: formatDate(new Date()),
    })
  }

  const updateAppeal = async (fieldsToEdit, id) => {
    await appealsApi.editAppeal(fieldsToEdit, id)
    fetchAppeals()
  }

  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <div className={styles.Container}>
      <Tabs selectedStatus={selectedStatus} setStatus={setStatus} />
      <div className={styles.Appeals}>
        {appeals.map((appeal) => {
          if (appeal.app_status === selectedStatus)
            return (
              <Appeal
                key={appeal.id}
                updateAppeal={updateAppeal}
                appeal={appeal}
              />
            )
          else return null
        })}
      </div>

      {isCreateMode && (
        <CreateAppeal
          newAppeal={newAppeal}
          setIsCreateMode={setIsCreateMode}
          changeNewAppeal={changeNewAppeal}
          createAppeal={createAppeal}
        />
      )}
      <Button
        value={'+'}
        onClick={() => {
          setIsCreateMode(true)
          setNewAppeal({
            ...newAppeal,
            app_status: selectedStatus,
          })
        }}
        className={styles.CreateAppButton}
      />
    </div>
  )
}

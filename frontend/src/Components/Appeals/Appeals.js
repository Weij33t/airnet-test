import React, { useEffect, useState } from 'react'
import { appealsApi } from './../../api/appealsApi'
import { Appeal } from './../Appeal/Appeal'

import styles from './Appeals.module.css'
import { Button } from './../Shared/Button/Button'
import { Tabs } from './../Tabs/Tabs'
import { CreateAppeal } from './../CreateAppeal/CreateAppeal'

export const Appeals = () => {
  const [appeals, setAppeals] = useState([])
  const [error, setError] = useState(null)
  const [selectedStatus, setSelectedStatus] = useState('Входящая')
  const [newAppeal, setNewAppeal] = useState({
    created_date: '',
    appeal_type: 'Входящая',
    appeal_text: '',
    user_id: 1,
  })
  const [isCreateMode, setIsCreateMode] = useState(false)

  useEffect(() => {
    ;(async () => {
      fetchAppeals()
    })()
  }, [])

  const fetchAppeals = async () => {
    const response = await appealsApi.getAppeals(1)
    if (!response) setError(response.statusText)
    const data = await response.json()
    setAppeals(data)
  }
  const setStatus = (e) => setSelectedStatus(e.target.dataset.value)

  const changeNewAppeal = (field, value) => {
    console.log(field, value)
    setNewAppeal({ ...newAppeal, [field]: value })
  }

  const createAppeal = async () => {
    await appealsApi.createAppeal(newAppeal)
    fetchAppeals()
  }

  const updateAppeal = async (fieldsToEdit, id) => {
    await appealsApi.editAppeal(fieldsToEdit, id)
    fetchAppeals()
  }
  console.log(newAppeal)

  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <div className={styles.Container}>
      <Tabs selectedStatus={selectedStatus} setStatus={setStatus} />
      <div className={styles.Appeals}>
        {appeals.map((appeal) => {
          if (appeal.app_status === selectedStatus)
            return <Appeal updateAppeal={updateAppeal} appeal={appeal} />
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
        onClick={() => setIsCreateMode(true)}
        className={styles.CreateAppButton}
      />
    </div>
  )
}

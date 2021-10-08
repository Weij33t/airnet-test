import React, { useState } from 'react'
import { Input } from './../Shared/Input/Input'
import { Button } from './../Shared/Button/Button'
import { usersApi } from './../../api/usersApi'

export const Login = ({ setUserId }) => {
  const [email, setEmail] = useState('test@test.com')
  const [password, setPassword] = useState('test')
  const [isError, setError] = useState('')

  const auth = async () => {
    const response = await usersApi.auth(email, password)
    if (!response.ok) {
      setError(response.statusText)
      return
    }
    const data = await response.json()
    console.log(data.id)
    setUserId(data.id)
  }

  if (isError) {
    return (
      <h1>
        Ошибка при авторизации.{' '}
        <Button onClick={() => setError('')} value="Попробовать снова" />
      </h1>
    )
  }

  return (
    <div>
      {/* type = password */}
      <div>
        <Input
          placeholder={'Email'}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <Input
          placeholder={'Пароль'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <Button value={'Войти'} onClick={auth} />
    </div>
  )
}

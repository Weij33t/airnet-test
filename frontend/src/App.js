import { useState } from 'react'
import './App.css'
import { Appeals } from './Components/Appeals/Appeals'
import { Login } from './Components/Login/Login'

function App() {
  const [userId, setUserId] = useState('')

  return (
    <div className="App">
      {!userId && <Login setUserId={setUserId} />}
      {userId && <Appeals userId={userId} />}
    </div>
  )
}

export default App

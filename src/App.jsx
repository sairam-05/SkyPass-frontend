import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 style={{color:"blue",fontSize:50}} >SkiPass</h1>
      <div>
        <Login/>
      </div>
      
    </>
  )
}

export default App

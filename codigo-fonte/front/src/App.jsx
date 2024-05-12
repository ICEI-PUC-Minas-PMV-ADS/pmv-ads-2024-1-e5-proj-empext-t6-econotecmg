import { useState } from 'react'
import './App.css'
import MenuNav from './components/MenuNav'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>       
        <MenuNav />
        <Outlet />
      </div>
      
    </>
  )
}

export default App

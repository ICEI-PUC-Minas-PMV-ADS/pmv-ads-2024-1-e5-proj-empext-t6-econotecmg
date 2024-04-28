import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Carrosel from './components/Carrosel'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      < NavBar/>
      < Carrosel/>
    </>
  )
}

export default App

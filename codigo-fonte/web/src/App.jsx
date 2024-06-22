import './App.css'
import Admin from './pages/Admin'
import Home from './pages/Home'
import Produtos from './pages/Produtos'
import { BrowserRouter, Route, Routes} from 'react-router-dom'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/produtos' element={<Produtos />}/>
        <Route path='/admin' element={<Admin />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App


import { BrowserRouter, Routes, Route } from 'react-router'
import './App.css'
import { Home, Auth, Orders } from './pages'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/orders' element={<Orders />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

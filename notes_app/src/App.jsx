import { Home } from './pages/Home'
import { Important } from './pages/Important'

import './App.css'
import { Routes,Route } from 'react-router-dom'
import { Archive } from './pages/Archive'

function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/archive' element={<Archive/>}></Route>
      <Route path='/important' element={<Important/>}></Route>
    </Routes>
    </>
  )
}

export default App

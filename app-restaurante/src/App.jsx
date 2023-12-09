import React from 'react'
import { BrowserRouter, Routes, Route,  NavLink } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

const App = () => {
  return (
    <>
      <header className='bg-slate-300 '>
        <div className='container-lg '>
          <div>
            <img src="https://placehold.co/40x40"/>
          </div>
          <nav>
            <NavLink to='/'>Home</NavLink>
          </nav>
        </div>
      </header>
      <main>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
          </Routes>
        </BrowserRouter>
      </main>
    </>
  )
}

export default App
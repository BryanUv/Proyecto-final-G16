import React from 'react'
import { BrowserRouter, Routes, Route,  Link } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

const App = () => {
  return (
    <BrowserRouter>
      <header className='bg-slate-300/80 py-4 px-6'>
        <div className='container-lg flex justify-between items-center'>
          <div>
            <img src="https://placehold.co/150x80"/>
          </div>
          <div className=''>
            <nav className='flex '>
              <div className=''> 
                <Link to="/">Home</Link>
              </div>
              <div className='flex gap-5'>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
              </div>
            </nav>
          </div>  
        </div>  
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
      </main>    
    </BrowserRouter>    
  )
}

export default App
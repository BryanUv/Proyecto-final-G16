

import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Gallery from "./pages/Gallery";
import Reservas from "./pages/Reservas";
import Platos from "./components/Carta/Platos";
import { IoHome, IoMenu } from "react-icons/io5";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import ProtectedRoute from "./utils/ProtectedRoute";
import { useLocalStorage } from 'react-use';

const App = () => {

  const [user, setUser] = useLocalStorage('auth');

  const openMenu = () =>{
    let menu = document.getElementById('menu');
    // let textHome = document.getElementById('textHome');

    if(menu.classList.contains('hidden')){
      menu.classList.remove('hidden');
    }
    else{
      menu.classList.add('hidden');
    }
  }

  return (

    <BrowserRouter>
      <header className="bg-slate-900 py-4 px-6 text-white">
        {/* <div className="container mx-auto lg:flex justify-between items-center">
          <div>
            <img
              className=" w-32 rounded-full"
              src="https://marketplace.canva.com/EAFVq1ge0ZU/1/0/1600w/canva-logo-restaurante-circular-sencillo-negro-blanco-QEgdJHSl6GE.jpg"
            />
          </div>

          <nav className="flex gap-4">
            <Link to="/" className="font-bold text-white hover:font-extrabold text-3xl">Home</Link> */}

            {/* <Link to="/gallery">Galeria</Link> */}
          {/* </nav>
          <div className="flex gap-4">
            <Link to="/login">
              <div className=" bg-slate-400 py-4 px-14 text-lg font-bold rounded-3xl hover:animate-pulse hover:bg-slate-600 ">Login</div>
            </Link>
            <Link to="/register">
            <div className=" bg-slate-400 py-4 px-14 text-lg font-bold rounded-3xl hover:animate-pulse hover:bg-slate-600 ">Register</div>

            </Link>
            <Link to="/gallery">Consulta Nuestros platos</Link> 

            </Link> */}
            {/* <Link to="/reservas">Reservar</Link> */}
          {/* </div>
        </div> */}
        <nav className=" py-6 relative z-10">
          <div className="container mx-auto flex items-center px-8 xl:px-0">
            <div className="flex flex-grow items-center gap-4">
              <img
                className=" w-32 rounded-full"
                src="https://marketplace.canva.com/EAFVq1ge0ZU/1/0/1600w/canva-logo-restaurante-circular-sencillo-negro-blanco-QEgdJHSl6GE.jpg"
              />
              <p className="text-3xl font-bold">Grill House</p>
            </div>
            <div className="lg:hidden"> 
              <IoMenu size='3rem' className="cursor-pointer" onClick={openMenu}/>
            </div>
            <div id="menu" className="lg:flex hidden flex-grow justify-between lg:items-center absolute lg:relative lg:top-0 top-40 bg-gray-900
            left-0 w-full lg:w-auto py-14 lg:py-0 px-8 rounded-2xl">
              <div className="flex flex-col lg:flex-row lg:gap-5 mb-8 lg:mb-0">
                <Link to="/" className="font-bold text-white text-3xl"><div className="flex gap-1 items-center justify-center hover:font-extrabold hover:underline mb-4"><IoHome />Home</div></Link>
                <Link to="/gallery" className="font-bold text-white text-3xl"><div className="flex gap-1 items-center justify-center hover:font-extrabold hover:underline"><MdOutlineRestaurantMenu />Carta</div></Link>
              </div>
              <div className="flex flex-col lg:flex-row gap-4 text-center">
                <Link to="/login">
                  <div className=" bg-slate-400 py-4 px-14 text-lg font-bold rounded-3xl hover:animate-pulse hover:bg-slate-600 ">Login</div>
                </Link>
                <Link to="/register">
                  <div className=" bg-slate-400 py-4 px-14 text-lg font-bold rounded-3xl hover:animate-pulse hover:bg-slate-600 ">Register</div>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <Routes>
          <Route  path="/" element={<Home />} />

          <Route  path='/Platos/:id' element={<Platos />} />


          <Route path="/gallery" element={<Gallery />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<ProtectedRoute canActivate={user}/>}>
            <Route path="/reservas" element={<Reservas />} />
          </Route>

        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;

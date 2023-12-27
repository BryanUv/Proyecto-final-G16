
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Gallery from "./pages/Gallery";
import Reservas from "./pages/Reservas";
import Platos from "./components/Carta/Platos";

const App = () => {
  return (
    <BrowserRouter>
      <header className="bg-slate-900 py-4 px-6 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <img
              className=" w-32 rounded-full"
              src="https://marketplace.canva.com/EAFVq1ge0ZU/1/0/1600w/canva-logo-restaurante-circular-sencillo-negro-blanco-QEgdJHSl6GE.jpg"
            />
          </div>

          <nav className="flex gap-4">
            <Link to="/" className="font-bold text-white hover:font-extrabold text-3xl">Home</Link>

            {/* <Link to="/gallery">Galeria</Link> */}
          </nav>
          <div className="flex gap-4">
            <Link to="/login">
              <div className=" bg-slate-400 py-4 px-14 text-lg font-bold rounded-3xl hover:animate-pulse hover:bg-slate-600 ">Login</div>
            </Link>
            <Link to="/register">
            <div className=" bg-slate-400 py-4 px-14 text-lg font-bold rounded-3xl hover:animate-pulse hover:bg-slate-600 ">Register</div>
            </Link>
            <Link to="/gallery">Consulta Nuestros platos</Link> 
          </div>
        </div>
      </header>
      <main>
        <Routes>
          <Route  path="/" element={<Home />} />

          <Route  path="/Platos/:id" element={<Platos />} />


          <Route path="/gallery" element={<Gallery />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reservas" element={<Reservas />} />

        </Routes>
      </main>
    </BrowserRouter>
  );
};


export default App;

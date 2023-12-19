
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Gallery from "./pages/Gallery";
import Reserva from "./pages/Reserva";

const App = () => {
  return (
    <BrowserRouter>
      <header className="bg-slate-900 py-4 px-6 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <img src="https://placehold.co/150x80" />
          </div>


          <nav className="flex gap-4">
            <Link to="/" className="font-bold text-white hover:text-amber-700">Home</Link>

            <Link to="/gallery">Galeria</Link>
          </nav>
          <div className="flex gap-4">
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>
        </div>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reserva" element={<Reserva />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};


export default App;

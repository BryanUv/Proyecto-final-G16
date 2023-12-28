import { Link, useNavigate } from "react-router-dom";
import { HiArrowSmLeft } from "react-icons/hi";
import { useState, useEffect } from "react";
import Swal from 'sweetalert2'

const FormRegister = () => {

  let navigate = useNavigate()
  const obtenerAuth = () => {
    var datos = localStorage.getItem('auth');
    if(datos){
      return JSON.parse(datos);
    }else{
      return [];
    }
  }

  const [auth, setAuth] = useState(obtenerAuth());

  const [nombre ,setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const btnGuardar = (event) => {
    event.preventDefault();
    var miOpjeto = { nombre, apellido, email, password }
    setAuth([...auth, miOpjeto]);
    limpiarFormulario();
    Swal.fire({
      position: "bottom-end",
      icon: "success",
      title: "Usuario registrado",
      showConfirmButton: false,
      timer: 1700
    });
  }

  const limpiarFormulario = () => {
    setNombre('');
    setApellido('');
    setEmail('');
    setPassword('');
    document.getElementById('frmRegistro').reset();
  }

  useEffect(() => {
    localStorage.setItem('auth', JSON.stringify(auth));
  },[auth])

  return (
    <section>
      <div className="justify-start">
        <Link to="/">
          <div className="flex items-center gap-3 py-3">
            <HiArrowSmLeft color="white" size={50} />
            <p className="text-white text-3xl">Ir Home</p>
          </div>
        </Link>
      </div>
      <div className="bg-white px-10 py-[2.1rem] rounded-3xl border-2 border-gray-100 flex flex-col items-center gap-y-2">
        <img
          className=" w-32"
          src="https://marketplace.canva.com/EAFVq1ge0ZU/1/0/1600w/canva-logo-restaurante-circular-sencillo-negro-blanco-QEgdJHSl6GE.jpg"
        />
        <h1 className="text-5xl font-semibold">Registrate</h1>
        <p className="font-medium text-lg text-center text-gray-500 mt-4">
          ¡Bienvenido de nuevo! Por favor ingrese sus datos.
        </p>
        <form id="frmRegistro" onSubmit={btnGuardar}>
          <div className="mt-8">
            <div>
              <label htmlFor="nombre" className="text-lg font-medium">
                Nombres Completos
              </label>
              <input
                type="text"
                id="nombre"
                name="fullname"
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                placeholder="Ingresa tu nombre"
                onChange={(event) => setNombre(event.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="apellido" className="text-lg font-medium">
                Apellidos
              </label>
              <input
                type="texto"
                id="apellido"
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                placeholder="Ingresa tu apellido"
                onChange={(event) => setApellido(event.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="text-lg font-medium">
                Email
              </label>
              <input
                type="texto"
                id="email"
                name="email"
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                placeholder="Ingresa tu email"
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="text-lg font-medium">
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                placeholder="Ingresa tu contraseña"
                onChange={(event) => setPassword(event.target.value)}
                required
                
              />
            </div>
            <div className="mt-8 flex flex-col gap-y-4">
              <button className="hover:bg-slate-700 py-3 rounded-xl bg-slate-500 text-white text-lg font-bold">
                Registrate
              </button>
            </div>
            <div className="mt-8 flex justify-center items-center">
              <p className="font-medium text-base">Ya tiene una cuenta?</p>
              <Link
                to="/login"
                className="text-slate-500 text-base font-medium ml-2"
              >
                Login
              </Link>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default FormRegister;

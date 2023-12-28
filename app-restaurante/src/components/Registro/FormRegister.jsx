import { Link } from "react-router-dom";
import { HiArrowSmLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const FormRegister = () => {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    fullname: '',
    email: '',
    password: ''
  })

  const handleChange = (event) => {
    const { name, value } = event.target

    setForm({ ...form, [name]: value })
  }

  const handleRegister = async (event) => {
    event.preventDefault();
    
    // console.log('Guardando la data del usuario...')

    const url = 'https://657bb008394ca9e4af149f21.mockapi.io/users'

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    }

    const response = await fetch(url, options)

    const data = await response.json()

    console.log(data)

    setForm({
      fullname: '',
      email: '',
      password: ''
    })

    // Redireccionar a la vista /login
    navigate('/login')
  }



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
        <form onSubmit={handleRegister}>
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
                required
                onChange={handleChange}
                value={form.fullname}
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
                required
                onChange={handleChange}
                value={form.email}
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
                required
                onChange={handleChange}
                value={form.password}
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

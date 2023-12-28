import { Link } from "react-router-dom";
import { HiArrowSmLeft } from "react-icons/hi";

const FormLogin = () => {
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
      <div className="bg-white px-10 py-20 rounded-3xl border-2 border-gray-100 flex flex-col items-center gap-y-2">
        <img
          className=" w-32"
          src="https://marketplace.canva.com/EAFVq1ge0ZU/1/0/1600w/canva-logo-restaurante-circular-sencillo-negro-blanco-QEgdJHSl6GE.jpg"
        />
        <h1 className="text-5xl font-semibold">¡Bienvenido!</h1>
        <p className="font-medium text-lg text-center text-gray-500 mt-4">
          ¡Bienvenido de nuevo! Por favor ingrese sus datos.
        </p>
        <form>
          <div className="mt-8">
            <div>
              <label htmlFor="email" className="text-lg font-medium">
                Usuario
              </label>
              <input
                type="text"
                id="email"
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                placeholder="Ingresa tu email"
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
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                placeholder="Ingresa tu contraseña"
                required
              />
            </div>
            <div className="mt-8 flex flex-col gap-y-4">
              <button className="hover:bg-slate-700 py-3 rounded-xl bg-slate-500 text-white text-lg font-bold">
                Iniciar sesión
              </button>
            </div>
            <div className="mt-8 flex justify-center items-center">
              <p className="font-medium text-base">No tiene una cuenta?</p>
              <Link
                to="/register"
                className="text-slate-500 text-base font-medium ml-2"
              >
                Regístrate
              </Link>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default FormLogin;

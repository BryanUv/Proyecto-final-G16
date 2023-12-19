import React from "react";

const FormRegister = () => {
  return (
    <section className="flex w-full h-screen">
      <div className="flex w-full h-full justify-center items-center">
        <div className="flex flex-col items-center w-96 bg-white border border-transparent rounded-lg">
          <img
            className=" w-32"
            src="https://marketplace.canva.com/EAFVq1ge0ZU/1/0/1600w/canva-logo-restaurante-circular-sencillo-negro-blanco-QEgdJHSl6GE.jpg"
          />
          <h2 className="text-2xl font-bold text-center mb-6 text-black">
            Regístrate
          </h2>

          <form className="flex flex-col gap-4">
            <div className="flex gap-4 flex-col ">
              <input
                type="text"
                name="cliName"
                placeholder="Nombres"
                className="border p-4 mt-1 shadow-md rounded-md"
                // onChange={handleChange}
                // value={form.petName}
              />
              <input
                type="text"
                name="cliLastName"
                placeholder="Apellidos"
                className="border p-4 mt-1 shadow-md rounded-md"
                // onChange={handleChange}
                // value={form.petName}
              />
            </div>

            <input
              type="email"
              name="cliEmail"
              placeholder="Email"
              className="border p-4 mt-1 shadow-md rounded-md "
              // onChange={handleChange}
              // value={form.petAge}
            />
            <input
              type="password"
              name="cliPassword"
              placeholder="Constraseña"
              className="border p-4 mt-1 shadow-md rounded-md"
            />
            <input
              type="submit"
              className="border p-2 mb-4 bg-slate-400 text-black rounded-md cursor-pointer hover:bg-slate-900 hover:text-white"
              value="Registrarme"
            />
          </form>
        </div>
      </div>

      <div className="hidden relative h-full w-full lg:flex items-center justify-center">
        <div className="w-full h-full">
          <img className="w-full h-full" src="/img/registrar.jpg" alt="" />
        </div>
        <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-0" />
      </div>

    </section>
  );
};

export default FormRegister;

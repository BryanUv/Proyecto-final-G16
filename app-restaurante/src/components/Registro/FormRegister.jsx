import React from "react";

const FormRegister = () => {
  return (
    <section className="flex flex-col absolute bottom-[15%] right-[36.3%]">
      <div className=" w-96 p-4 mx-auto bg-white">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-400">
          Regístrate
        </h2>

        <form className="flex flex-col gap-4">
          <div className="flex gap-4 flex-col">
            <input
              type="text"
              name="cliName"
              placeholder="Nombres"
              className="border p-3 shadow-md rounded-md"
              // onChange={handleChange}
              // value={form.petName}
            />
            <input
              type="text"
              name="cliLastName"
              placeholder="Apellidos"
              className="border p-3 shadow-md rounded-md"
              // onChange={handleChange}
              // value={form.petName}
            />
          </div>

          <input
            type="email"
            name="cliEmail"
            placeholder="Email"
            className="border p-3 shadow-md rounded-md "
            // onChange={handleChange}
            // value={form.petAge}
          />
          <input
            type="password"
            name="cliPassword"
            placeholder="Constraseña"
            className="border p-3 shadow-md rounded-md"
          />
          <input
            type="submit"
            className="border p-2 bg-slate-400 text-black rounded-md cursor-pointer"
            value="Registrarme"
          />
        </form>
      </div>
    </section>
  );
};

export default FormRegister;

import React from "react";
import { HiArrowSmLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
// bg-[url('/img/chef1.jpg')
const Reservas = () => {
  return (
    <section className="w-full h-screen bg-[url('/img/chef1.jpg')] bg-no-repeat bg-cover">
      <div className="absolute top-80 left-52">
        <Link to="/">
          <div className="flex items-center gap-3 py-3">
            <HiArrowSmLeft color="white" size={50} />
            <p className="text-white text-3xl">Ir Home</p>
          </div>
        </Link>
      </div>
      <div className=" w-96 p-4 border border-transparent rounded-lg bg-white/20 backdrop-blur-sm absolute bottom-[15%] left-[10%]">
        <h2 className="text-2xl text-center mb-4 text-white font-bold">Reservas</h2>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            name="petName"
            placeholder="Nombre de cliente"
            className="border p-3 shadow-md rounded-md"
            //   onChange={handleChange}
            //   value={form.petName}
          />
          <input
            type="number"
            name="cliNumber"
            min="0"
            max="20"
            placeholder="Número de personas"
            className="border p-3 shadow-md rounded-md"
            //   onChange={handleChange}
            //   value={form.petAge}
          />
          <input
            type="date"
            name="appointmentDate"
            placeholder="Fecha de la cita"
            className="border p-3 shadow-md rounded-md"
            //   onChange={handleChange}
            //   value={form.appointmentDate}
          />
          <input
            type="time"
            name="appointmentTime"
            placeholder="Hora de la cita"
            className="border p-3 shadow-md rounded-md"
            //   onChange={handleChange}
            //   value={form.appointmentTime}
          />
          <input
            type="submit"
            className="border p-2 bg-slate-400 text-white rounded-md cursor-pointer border-transparent hover:bg-slate-900"
            value="Guardar"
          />
        </form>
      </div>
    </section>
  );
};

export default Reservas;

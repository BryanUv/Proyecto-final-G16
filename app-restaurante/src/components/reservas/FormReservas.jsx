import { useEffect, useState } from "react"
import { HiArrowSmLeft } from "react-icons/hi";
import { Link } from "react-router-dom";

const FormReservas = ({onSaveReserva, reserva}) =>{
    const INITAL_FORM_STATE = {
      id: '',
      cliName:'',
      cliNumber:'',
      reservaDate:'',
      reservaTime:''
      }
  
      const [form, setForm] = useState(INITAL_FORM_STATE)
  
      useEffect(() => {
        const hayReserva = Object.keys(reserva).length > 0
        console.log(reserva)
        if(hayReserva){
          setForm(reserva)
        }
      },[reserva])

      const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
  
        setForm({ ...form, [name]: value })
      }
  
      const handleSaveReserva = (event) => {
        event.preventDefault();
        if(!form.id){
          //aqui se genera una nueva reserva
          const newReserva = {
            ...form,
            id: crypto.randomUUID()        
          }  
          console.log('Guardando reserva...', newReserva)
          onSaveReserva(newReserva)          
        }else{
          //cuando se edita la reserva
          onSaveReserva(form)
          
        }
        setForm(INITAL_FORM_STATE)
      }
      return (
        <section className="p-10">
         
          <div className=" w-96 p-4 border border-transparent rounded-lg bg-white/20 backdrop-blur-sm lg:absolute lg:bottom-[10%] lg:left-[10%]">
            <h2 className="text-2xl text-center mb-4 text-white font-bold">Reservas</h2>
    
            {/* <pre>
              {JSON.stringify(form, null, 2)}
            </pre> */}
    
            <form className="flex flex-col gap-4" onSubmit={handleSaveReserva}>
              <input
                type="text"
                name="cliName"
                placeholder="Nombre de cliente"
                className="border p-3 shadow-md rounded-md"
                onChange={handleChange}
                value={form.cliName}
                required
              />
              <input
                type="number"
                name="cliNumber"
                min="0"
                max="20"
                placeholder="Número de personas"
                className="border p-3 shadow-md rounded-md"
                onChange={handleChange}
                value={form.cliNumber}
                required
              />
              <input
                type="date"
                name="reservaDate"
                placeholder="Fecha de la cita"
                className="border p-3 shadow-md rounded-md"
                onChange={handleChange}
                value={form.reservaDate}
                required
              />
              <input
                type="time"
                name="reservaTime"
                placeholder="Hora de la cita"
                className="border p-3 shadow-md rounded-md"
                onChange={handleChange}
                value={form.reservaTime}
                required
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

export default FormReservas;
import { useState } from "react";
import FormReservas from "../components/reservas/formReservas";
import ListaReserva from "../components/reservas/listaReserva";
import { Link } from "react-router-dom";
import { HiArrowSmLeft } from "react-icons/hi";

const Reservas = () => {

  const [reserva, setReserva] = useState([])

  const handleSaveReserva = (form) =>{

    console.log(form)
    setReserva([...reserva, form])
  }
  return(

    


    //preguntar a profesor sobre generar reservas con respecto al fondo 
    <section className="flex justify-around w-full h-screen bg-[url('/img/chef1.jpg')] bg-no-repeat bg-cover">
      <div className="justify-start">
        <Link to="/">
          <div className="flex items-center gap-3 py-3">
            <HiArrowSmLeft color="white" size={50} />
            <p className="text-white text-3xl">Ir Home</p>
          </div>
        </Link>
      </div>

      < FormReservas 
        onSaveReserva= {handleSaveReserva}
        />
      <ListaReserva reserva= {reserva}/>
    </section>
      
    
  )
}

  

export default Reservas;

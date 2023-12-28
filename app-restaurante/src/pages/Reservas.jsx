import { useState } from "react";
import FormReservas from "../components/reservas/FormReservas";
import ListaReserva from "../components/reservas/listaReserva";
import { Link } from "react-router-dom";
import { HiArrowSmLeft } from "react-icons/hi";

const Reservas = () => {

  const [reserva, setReserva] = useState([])
  const [reservaSelected, setReservaSelected] = useState({})
  const handleSaveReserva = (form) =>{
    const id = form.id

    const reservaIndexFound = reserva.findIndex(res => res.id === id)

    if(reservaIndexFound >= 0){

      const cloneReserva = [...reserva]
      cloneReserva[reservaIndexFound] = form
      setReserva(cloneReserva)
    }else{
      if(reserva.length === 0){
      
        setReserva([form])
      }
    }
    console.log(form)
  }
  
  const handleEliminar = (id) =>{
    console.log('id', id)

    const newReservas = reserva.filter(
      reserva => reserva.id !== id
    )

  setReserva(newReservas)
  }
  

  const handleEditar = (reserva) =>{
    console.log(reserva)
    setReservaSelected(reserva)
  }

  return(   

    
    //preguntar a profesor sobre generar reservas con respecto al fondo 
    <section className="flex flex-col lg:flex-row justify-around w-full h-screen bg-[url('/img/chef1.jpg')] bg-no-repeat bg-cover">
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
        reserva = {reservaSelected}
        />
      <ListaReserva reserva= {reserva} 
      eliminar={handleEliminar}
      editar={handleEditar}
      />
    
    </section>
      
  
  )
}
  

export default Reservas;

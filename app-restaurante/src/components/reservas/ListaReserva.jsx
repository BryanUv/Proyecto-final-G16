const ListaReserva = ({ reserva,eliminar, editar }) => {
  
  if (reserva.length === 0) {
    return (
      <section className="w-1/4 p-4 bg-white/20 backdrop-blur-sm">
        <h2 className="text-2xl text-center mb-4">Reservas</h2>

        <div className="flex justify-center items-center gap-4 h-96 text-2xl">
          No tiene Reservas.
        </div>
      </section>
    )
  }
  
  return (
    <>
      <section className="w-1/4 p-4 bg-none rounded-lg ">
        <h2 className="text-2xl text-center mb-4 text-white font-bold">RESERVACIONES</h2>

        {reserva.map((reserva) => {
          return (
            <div className="flex flex-col gap-3 mb-4" key={reserva.id}>
              <div className="border-2 p-3 rounded-lg bg-white/20 backdrop-blur-sm ">
                <div>
                  <h4 className="font-semibold text-lg text-white underline">Datos de Reserva</h4>
                  <div>
                    <strong className="text-white">Nombre de Cliente: {reserva.cliName}</strong> 
                  </div>
                  <div>
                    <strong className="text-white">Cantidad de personas: {reserva.cliNumber}</strong> 
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-white underline">Fecha y Hora de Reserva</h4>
                  <div>
                    <strong className="text-white">Fecha: {reserva.reservaDate}</strong> 
                  </div>
                  <div>
                    <strong className="text-white">Hora: {reserva.reservaTime}</strong> 
                  </div>
                </div>
                <div className="flex flex-col gap-3 mt-3">

                  <button
                    className="p-2 bg-slate-400 text-white rounded-lg cursor-pointer hover:bg-blue-900"
                    onClick={() => editar(reserva)}
                  >
                    Editar
                  </button>
                  <button
                    className="p-2 bg-slate-500 text-white rounded-lg cursor-pointer hover:bg-red-700"
                    onClick={() => eliminar(reserva.id)}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          )
        })}

        
      </section>
    </>
  )
}

export default ListaReserva
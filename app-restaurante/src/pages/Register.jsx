

const Register = () => {
  return (

    <section className="w-96 mt-4 p-4 mx-auto bg-slate-800">
      <h2 className="text-2xl font-bold text-center mb-6 text-slate-200">Regístrate</h2>

      {/* <pre>
        {JSON.stringify(form, null, 2)}
      </pre> */}

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
          type="number"
          name="cliEmail"
          min="0"
          max="50"
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
    </section>

  )
}

export default Register
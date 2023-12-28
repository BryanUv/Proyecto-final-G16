import FormImage from "../components/Registro/FormImage"
import FormRegister from "../components/Registro/formRegister"

const Register = () => {
  return (

    <div className="flex w-full h-screen bg-[#27374D]">
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <FormRegister/>
      </div>
      <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-200">
        <FormImage/>
      </div>
    </div>

  )
}

export default Register
import FormLogin from "../components/Login/FormLogin";

const Login = () => {
  return (
    <div className="flex w-full h-screen bg-slate-900">
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <FormLogin/>
      </div>
      <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-200">
        <div className="w-full h-full relative flex">
          <img src="https://images.hola.com/imagenes/cocina/recetas/20191014150987/platos-de-lunes-a-viernes/0-729-379/portada-m.jpg"/>
        </div>
        <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-sm"/>
      </div>
    </div>
  );
};

export default Login;

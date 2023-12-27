import{Link} from "react-router-dom"

const Home = () => {
  return (

<>
<section className="bg-[#27374D] flex gap-5 items-center justify-center p-5 flex-col" >
  <div className=" text-white font-mono text-8xl flex text-center absolute shadow-2xl animate-pulse uppercase ">
    Grill Haus Restaurant
  </div>
  <div className="">
    <img className="" src="https://media.istockphoto.com/id/1364372205/es/foto/chef-entregando-plato-con-comida-a-trav%C3%A9s-de-la-estaci%C3%B3n-de-pedidos-en-la-cocina-comercial.jpg?s=2048x2048&w=is&k=20&c=y7FODfJbZkZamixBxJxNxhclJoVUiFMTCK8OnG62rtw=" width="1440" alt="" />
  </div>
  
</section>
<section className="bg-[#27374D] flex gap-10 items-center justify-center p-12">  
  <div className=" text-center font-mono text-2xl text-white " > 
        <p>
        Nuestro Compromiso
        </p>        
        <p>        
        En cada plato, fusionamos ingredientes frescos y de calidad con técnicas culinarias innovadoras.
        </p>
        <p>         
        Creemos en la excelencia desde la primera hasta la última mordida.
        </p>
  </div>
</section>
<section className="bg-[#27374D] flex gap-10 items-center justify-center p-10 "> 
<div > 
  <img src="https://t3.ftcdn.net/jpg/04/38/64/76/360_F_438647662_2tWr9OdsFNQi3KJVRM9HsyWkyuwHdZdV.jpg" width="700" alt="" />
</div>
<div>
  <img src="https://www.shutterstock.com/image-photo/lomo-saltado-peruvian-tradition-gourmet-600nw-2193747871.jpg" width="700" alt="" />
</div>
</section>
<section className="bg-[#27374D] flex gap-10 items-center justify-center p-10 " >
  <div className="text-center font-mono text-2xl text-white ">
    <p>    
      Explora la elegancia de [Nombre del Restaurante], donde el diseño y la delicia se fusionan. 
    </p>
    <p>
    Descubre la fusión perfecta entre estética y calidad en un ambiente encantador. 
    </p>
    <p>
    ¡Te damos la bienvenida a un rincón culinario donde la belleza se mezcla con el placer!
    </p>
    <div className="flex items-center justify-center p-10">
    <img src="https://images.pexels.com/photos/1237073/pexels-photo-1237073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  alt="" />
    </div>
  </div>
</section>
<section className="bg-[#27374D] flex gap-10 items-center justify-center p-10 ">
  
  <div className="flex flex-col gap-14 item">
  <div className="">
    <img src="https://i.pinimg.com/736x/18/32/a0/1832a0539474e080a4405140b1a04efb.jpg" width='725' alt="" />
  </div>
  <div>
  <img src="https://mandolina.co/wp-content/uploads/2022/11/4-700x400-1.jpg" width='725' alt="" />
  </div>
  </div>
  <div>
  <img src="https://i0.wp.com/foodandpleasure.com/wp-content/uploads/2022/07/salvaje-menu-1.jpg?resize=600%2C900&ssl=1" width="620" alt="" />
  </div>
    
</section>
<section className="bg-white/10 flex  flex-col gap-8 items-center justify-center p-12 text-white text-4xl w-[40%] h-[25%] absolute  translate-x-[75%] translate-y-[-200%]  backdrop-blur-sm  shadow-2xl ">
  <p className="text-center">
  ¡Reserva tu mesa y prepárate para una experiencia culinaria inolvidable!
  </p>
  <Link to="/reservas">
    <div className="px-9 py-2 bg-white/10 border-2 rounded-lg hover:bg-slate-900 animate-bounce">
      HAS TU RESERVA
    </div>

  </Link>

  {/*<button className="border-current border-2 border-solid rounded-lg w-80 h-14  items-center justify-center hover:bg-slate-900 ">
    HAZ TU RESERVA 
  </button>*/}
</section>
<footer className="bg-slate-900 flex justify-center items-center gap-14 p-9">
  <div className=" bg-slate-900 h-80 w-80 flex justify-center items-center flex-col text-white gap-2">
        <p>Phone: +1-543-123-4567</p>
        <p>example@fylo.com</p>
  </div>
  <div className=" bg-slate-900 h-80 w-80 flex justify-center items-center flex-col text-white gap-2">
        <p>Contact Us</p>
        <p>Terms</p>
        <p>Privacy</p>
      
  </div>
  <div className=" bg-slate-900 h-80 w-80 flex justify-center items-center flex-col text-white g-2">
        <p>About Us</p>
        <p>Jobs</p>
        <p>Press</p>
        <p>Blog</p>
  </div>
  <div className=" bg-slate-900 h-80 w-80 flex justify-center items-center gap-5 text-white">
    <img className="h-12" src="https://www.svgrepo.com/show/475647/facebook-color.svg" alt="" />
    <img className="h-12" src="https://www.svgrepo.com/show/475689/twitter-color.svg" alt="" />
    <img className="h-12" src="https://www.svgrepo.com/show/475658/instagram-color.svg" alt="" />
  </div >

</footer>
</>

    


  )
}

export default Home
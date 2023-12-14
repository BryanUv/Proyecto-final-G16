import{Link} from "react-router-dom"

const Home = () => {
  return (
<>
<section className="bg-[#27374D] flex gap-10 items-center justify-center p-12" >
  <div>
    <img src="https://www.recomiendopirque.cl/wp-content/uploads/2022/07/Bodega-1883-Wine-Bar-Restaurant-Concha-Y-Toro-Aurea-Recomiendo-Pirque-01.jpg" alt="" />
  </div>
  <div>
    <img src="https://www.qualitatis.es/wp-content/uploads/2019/10/Recomendaciones-para-triunfar-con-el-menu-de-tu-restaurante.png.webp" alt="" />
  </div>
</section>
<section className="bg-[#27374D] flex gap-10 items-center justify-center p-12"> 
  <div>
  <img src="https://placehold.co/1440x500/png" alt="" />
  </div>
</section>
<section className="bg-[#27374D] flex gap-10 items-center justify-center p-10 ">
  
  <div className="flex flex-col gap-14 item">
  <div className="">
    <img src="https://i.pinimg.com/736x/18/32/a0/1832a0539474e080a4405140b1a04efb.jpg" width='700' alt="" />
  </div>
  <div>
  <img src="https://mandolina.co/wp-content/uploads/2022/11/4-700x400-1.jpg" alt="" />
  </div>
  </div>
  <div>
  <img src="https://i0.wp.com/foodandpleasure.com/wp-content/uploads/2022/07/salvaje-menu-1.jpg?resize=600%2C900&ssl=1" alt="" />
  </div>
</section>
<section className="bg-white/10 flex  flex-col gap-8 items-center justify-center p-12 text-white text-4xl w-[40%] h-[25%] absolute  translate-x-[75%] translate-y-[-200%]  backdrop-blur-sm  shadow-2xl ">
  <p className="text-center">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, saepe.
  </p>
  <Link to="/reserva">
    <div className="px-9 py-2 bg-white/10 border-2 rounded-lg hover:bg-slate-900">
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
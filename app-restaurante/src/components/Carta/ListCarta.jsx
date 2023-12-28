import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


const ListCarta = () => {
  const [platos, setPlatos] = useState([])

  const fetchPlatos = async () => {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=beef')

    const data = await response.json()

    return data.meals
  }

  useEffect(() => {
    fetchPlatos()
      .then(meals => setPlatos(meals))
  },[])

  return (
    <>
      <section className="grid lg:grid-cols-5 grid-cols-1 gap-12 gap-y-20 mt-20 mx-20 pb-20">
        
        {platos.map(plato => {
          // key= {plato.idMeal}
          return (
            <Link to={`/Platos/${plato.idMeal}`} key= {plato.idMeal}>
              <article key={plato.idMeal} className="bg-white/10 backdrop-blur-sm rounded-xl p-3 hover:scale-110 hover:text-white transition duration-500">
                <img src={plato.strMealThumb} alt="" />
                <div className="font-bold text-center mt-2">{plato.strMeal}</div>
              </article>

            </Link>
            
          )
        })}
      </section>
    </>
  )
}

export default ListCarta

import React, { useEffect, useState } from 'react'
import {Link, useParams } from 'react-router-dom'


const Platos = () => {

const {id} = useParams()
const [platos, setPlatos] = useState(null)

const getPlatos = async (id) =>{
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)

    const data = await response.json()
    return data
  } 
    useEffect(() =>{
        getPlatos(id)
        .then(data => setPlatos(data))
    },[])


  return (
    <>
        <h1>Detalle del Plato {id}</h1>

        <div className='flex justify-center flex-col items-center mt-6 text-center gap-4'>
          <img src={platos?.strMealThumb} alt="" />
          <strong>{platos?.strMeal}</strong>
          <Link to="/" rel="stylesheet" href="" className='font-bold text-blue-700'>
            Back Home
          </Link>
        </div>
    </>
    
  )
}

export default Platos
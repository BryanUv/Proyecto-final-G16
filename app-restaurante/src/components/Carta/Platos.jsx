import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Platos = () => {
  const { id } = useParams();
  const [platos, setPlatos] = useState(null);
  const [loading, setLoading] = useState(true);

  const getPlatos = async (id) => {
    
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      const data = await response.json();
      return data.meals[0];
    
  };

  useEffect(() => {
    getPlatos(id)
      .then((data) => {
        setPlatos(data);
      });
  }, [id]);

  return (
    <>
      <section className='bg-[#27374D]'>
        
          
          <h1 className='text-5xl text-white text-center pt-10 pb-10'>{platos?.strMeal}</h1>      

        
          <div className='flex justify-center flex-col items-center mt-6 text-center gap-4 '>
            <img src={platos?.strMealThumb } alt={platos?.strMeal} />

            
            <strong className='text-4xl'>Categoría: {platos?.strCategory}</strong>
            <strong className='text-4xl'>País de origen: {platos?.strArea}</strong>
            

            <Link to="/Gallery" className='font-bold text-lg mb-10 text-white hover:text-blue-700 hover:text-3xl'>
              Volver a la Carta
            </Link>
          </div>

      </section>
      
    </>
  );
};

export default Platos
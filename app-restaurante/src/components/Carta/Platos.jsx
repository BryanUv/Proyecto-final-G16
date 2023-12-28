import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Platos = () => {
  const { id } = useParams();
  const [platos, setPlatos] = useState(null);

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
        
          
          <h1 className='text-5xl text-white text-center py-10 px-10'>{platos?.strMeal}</h1>      

        
          <div className='flex justify-center flex-col items-center mt-6 text-center gap-4 px-10'>
            <img className='rounded-xl shadow-black shadow-lg' src={platos?.strMealThumb } alt={platos?.strMeal} />

            <div className='bg-white flex flex-col py-4 px-8 rounded-lg gap-2 mt-5 shadow-black shadow-md'>
              <strong className='text-2xl lg:text-4xl'>Categoría: {platos?.strCategory}</strong>
              <strong className='text-2xl lg:text-4xl'>País de origen: {platos?.strArea}</strong>
            </div>
            

            <Link to="/Gallery" className='font-bold text-lg mb-10 text-white hover:text-slate-400 hover:text-3xl mt-5'>
              Volver a la Carta
            </Link>
          </div>

      </section>
      
    </>
  );
};

export default Platos
import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GiftGridItem } from './GiftGridItem';

export const GiftGrid = ({category}) => {

    //const [images, setImages] = useState([])

    const {data:images, loading} = useFetchGifs(category);
    

  return (
      <>
        <h3 className="animate__animated animate__fadeIn">{category}</h3>
        {loading && <p className="animate__animated animate__flash">Cargando...</p>
        }

      <div className='card-grid'>
    
   
        
        {
        images.map(img=>(
            <GiftGridItem key={img.id} {...img}/> 
        ))
        }    
                

    
    </div>
    
    </>
  )
}

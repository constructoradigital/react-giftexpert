import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GiftGrid } from './components/GiftGrid'



const GiftExpertApp = () => {

  const [categories, setCategories] = useState(['goku'])



  return (
    <div>
      <h2>  Gift App </h2>
      <AddCategory setCategories={setCategories}/>
      <hr/>  
 
      <ol>
        {

          categories.map( category =>(
            <GiftGrid key={category} category={category}/>
          ))

        }
      </ol>

    </div>
    
  )
}


export default GiftExpertApp;
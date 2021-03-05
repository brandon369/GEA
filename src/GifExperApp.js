import React, {useState} from "react";
import {AddCategory} from "./components/AddCategoty";
import GifGrid from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch']);

  /* const handleAdd = () => {
     const element = 'hola';
     // setCategories([...categories, element]);
     setCategories(cats => [...cats, element]);
   }*/

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories}/>
      <hr/>
        {
          categories.map(category =>
            <GifGrid
              key={category}
              category={category}
            />
          )
        }
    </>
  )
}

import { useEffect, useState } from "react";
import GifItem from "./GifItem";
import { getGifs } from "../helpers/GetGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";

const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category );
    
    
  return (
    <>
      <h3>{category}</h3>
      {
        isLoading && (<h2>Cargando...</h2>)
      }
      
      <p>{category}</p>
      <div className="card-grid">
       {
        images.map((image)=>(
          <GifItem key={image.id} {...image}/>
        ))
       }
      </div>
    </>
  );
};

export default GifGrid;

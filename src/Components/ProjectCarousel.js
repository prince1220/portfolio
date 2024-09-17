import React from 'react'

export default function ProjectCarousel({images}) {
  return (
   <div   className="slider" >
       {images.map(image=>{
         return  <div className="image-container">

         <img   src={image} alt="Project One"/> 
     </div>
       })}

  </div>
  )
}

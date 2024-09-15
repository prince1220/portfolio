import React from 'react'

export default function ProjectCarousel({images}) {
  return (
   <div   className="slider" >
       <div className="image-container">
          <img   src={images[0]} alt="Project One"/> 
      </div>

      <div  className="image-container">
      <img  src={images[1]} alt="Project One"/> 
      </div>

      <div  className="image-container">
         <img  src={images[2]} alt="Project One"/> 
      </div>
      <div  className="image-container">
        <img  src={images[3]} alt="Project One"/> 
      </div>
      <div  className="image-container">
      <img src={images[4]} alt="Project One"/> 
      </div>
      <div  className="image-container">
       <img  src={images[5]} alt="Project One"/>
      </div>
      <div  className="image-container">
      <img  src={images[6]} alt="Project One"/>
      </div>
      <div  className="image-container">
      <img  src={images[7]} alt="Project One"/>
      </div>
      <div  className="image-container">
      <img  src={images[8]} alt="Project One"/>
      </div>
      <div  className="image-container">
      <img  src={images[9]} alt="Project One"/>
      </div>
      <div  className="image-container">
      <img  src={images[10]} alt="Project One"/>
      </div>
  </div>
  )
}

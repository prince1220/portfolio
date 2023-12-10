import React from 'react'
import image1 from "../Assets/img/swan soup.png"
import image2 from "../Assets/img/swan_artwork.png"
import image3 from "../Assets/img/image_swan_lunch.png"
import image4 from "../Assets/img/swan_lunch_close.png"
import image5 from "../Assets/img/swan_dinner_close.png"
import image6 from "../Assets/img/swan_ramen.png"
import image7 from "../Assets/img/swan_house.png"
export default function ProjectCarousel({images}) {
  return (
   <div   className="slider">
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

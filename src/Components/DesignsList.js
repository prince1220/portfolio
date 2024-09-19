import DesignCard from "./DesignCard"
import ShowBox from "./ShowBox"
import image1 from "../Assets/img/swan soup.png"
import image2 from "../Assets/img/ahmad_harmon.png"
import image3 from "../Assets/img/hara.png"
import image4 from "../Assets/img/Driving Miss Daisy.png"
import image5 from "../Assets/img/image_swan.png"
import image6 from "../Assets/img/swan soup lunch menu.png"
import { useState } from "react"

let description1="Swan Soup"
let description2="Ahmad Harmon"
let description3="HARA"
let description4="Driving Miss Daisy"
let description5="Itsukushima Shrine/Pen & Ink Artwork"
let description6="Japanese Restaurant Lunch Menu"

function DesignsList(){

const [toggle,setToggle]=useState(false);
const [show,setShow]=useState(false);

function showShowBox(){
  
    setShow(true);
}

 let list=[
    <DesignCard image={image1} description={description1} link={"/projects/swansoup"}/>,
  
    <DesignCard image={image3} description={description3} link={"/projects/hara"}/>,
    <DesignCard image={image2} description={description2} link={"/projects/ahmadharmon"}/>,
    <DesignCard image={image4} description={description4} link={"/projects/drivingmissdaisy"}/>,
 ]

 
 let expandlist=[
    <DesignCard image={image5} description={description5}/>,
    <DesignCard image={image6} description={description6}/>
 ]
 
 
    return(
    <div >
    
        {show && <ShowBox image={image1} description={description1}/>}


      <div className="project-container">

       {list}



       {toggle && expandlist}

      </div>

  {false && ///hide and show more button
  <div>
    {!toggle && <button className="show-more" onClick={()=>{
        setToggle(true)
     }}>show more</button>}

    {toggle && <button className="hide"  onClick={()=>{
        setToggle(false)
     }}>hide</button>}
     </div>
   }

    </div>
)
  
  
  }
  
  export default DesignsList;


  {/*
https://www.youtube.com/watch?v=SqcY0GlETPk


*/}
import React from 'react'
import { useParams } from 'react-router-dom'
import "./Project.css"
import image1 from "../Assets/img/swan soup.png"
import image2 from "../Assets/img/swan_artwork.png"
import image3 from "../Assets/img/image_swan_lunch.png"
import image4 from "../Assets/img/swan_lunch_close.png"
import image5 from "../Assets/img/swan_dinner_close.png"
import image6 from "../Assets/img/swan_ramen.png"
import image7 from "../Assets/img/swan_house.png"

import image8 from "../Assets/img/ahmad_harmon_logo.png"
import image9 from "../Assets/img/ahmad_harmon.png"
import image10 from "../Assets/img/ahmad_invoice.png"
import image11 from "../Assets/img/ahmad_business_card.png"

import image12 from "../Assets/img/hara_logo.png"
import image13 from "../Assets/img/hara_visual_identity.png"
import image14 from "../Assets/img/hara_typography.png"
import image15 from "../Assets/img/hara_marchandise.png"
import image16 from "../Assets/img/hara_business.png"
import image17 from "../Assets/img/hara_service_vehicle.png"
import image18 from "../Assets/img/hara.png"
import image19 from "../Assets/img/hara_visual_identity_2.png"
import image20 from "../Assets/img/hara_color_pallet.png"
import image21 from "../Assets/img/hara_style_guide.png"
import image22 from "../Assets/img/hara_artwork.png"

import image23 from "../Assets/img/hara_style_guide.png"
import image24 from "../Assets/img/hara_style_guide.png"
import image25 from "../Assets/img/hara_style_guide.png"




import ProjectDetails from '../Components/ProjectDetails'
import ProjectCarousel from '../Components/ProjectCarousel'

let listOfProjects=[
  {
    id:"swansoup",
    title:"Swan Soup",
    description:"Swan Soup Japanese Cuisine offers delicious dining, takeout, and delivery to Brooklyn, NY. Swan Soup is a cornerstone of the Brooklyn community and has been recognized for its outstanding Sushi cuisine, exclusive soup dishes, excellent service and friendly staff. Our restaurant is known for its modern interpretation of classic dishes and its emphasis on only using high quality fresh ingredients.",
    images:[image1,image2,image3,image4,image5,image6,image7],
    image:image1
  },
  {
    id:"ahmadharmon",
    title:"Ahmad Harmon",
    description:"Ahmad Harmon is a Fashion, Street Documentary Photographer. Ahmad relaxed and collaborative approach creates images of genuine ease and spontaneity. Often photographing on location and in rural environments in an attempt to establish a connection between the viewer and the image.",
    images:[image8,image9,image10,image11],
    image:image8
  },
  {
    id:"hara",
    title:"HARA",
    description:"The Hollis Animal Rescue Association (HARA) was the first humane society to be established in Queens NY and it is today, one of the largest in the United States.",
    images:[image12,image13,image14,image15,image16,image17,image18,image19,image20,image21,image22],
    image:image12
 },
  {
    id:"drivingmissdassy",
    title:"Driving Miss Daisy",
    description:"",
    images:[image23,image24,image25],
    image:image23
  }
]

export default function Project() {
    const id=useParams().id; ///name of the project from the url
    const index=listOfProjects.findIndex(item=>item.id==id)

  return (
    <div className="project page">

   <ProjectCarousel images ={listOfProjects[index].images} />
   <ProjectDetails project_name={id} title={listOfProjects[index].title} description={listOfProjects[index].description} />
  


    </div>
  )
}

/*projects*/

let projects=[
{
  title:"",
  description:""
},
{
  title:"",
  description:""
}


]

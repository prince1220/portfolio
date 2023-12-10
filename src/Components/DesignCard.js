
import {Link} from "react-router-dom"

///Link is used to develop single page app SPA
function DesignCard({image,description,link}){


  return(
  <div className="project-card">
    <Link to={link}>
    <img class="project-image" src={image} alt="Project Two"/> 
     <p className="project-description">{description}</p>
    </Link>
  </div>

  )
 

}

export default DesignCard;

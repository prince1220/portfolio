

function ShowBox({image,description,link}){


    return(
    <div>
      <img class="Project-image" src={image} alt="Project Two"/> 
      <p>{description}</p>
    </div>
  
    )
  

  }
  
  export default ShowBox;
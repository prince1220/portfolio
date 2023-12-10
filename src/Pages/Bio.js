import bioImage from "../Assets/img/bio-image.png"
import "./Bio.css"
function Bio(){

    return  (
     <section className="bio page"  > 
        
     <img className="Project-image" src={bioImage} alt="Project One"/> 

     <div   className="card-right">   
     <h1>Hello</h1>


       <p className="bio-paragraph">
                  Frontdesk Designs is a multi-disciplinary
                  design & photography studio focusing on branding & 
                  packaging. Our design principle is simple. Understanding 
                  content, and transforming it into relevant form in the right context.
                  We make the new value in businesses through thoughtful and effective
                  brand experiences.
        </p>
</div>
     </section>
     
    )
}

export default Bio
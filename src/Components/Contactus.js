import React from "react"
function ContactUs(){

 return (
    <div>
    <form  className="contact-form"> 
        <div>
           <label for="name">Name*  </label>
          <input id="name" type="text" class="input-field"/>
       </div>
       <div>
          <label for="email">Email *  </label>
          <input id="email" type="email" class="input-field"/>
       </div> 
       <div>
        <label for="subject">Subject  </label>
        <input id="subject" type="text" class="input-field"/>
      </div>
      
      <div className="textarea-container">
        <label for="message">Message  </label>
        <textarea id="message" rows="6"  type="text" class="input-field-message">
      </textarea>
       </div>

       <div class="send-button-container">
      
          <button type="submit">Send</button>
       
       </div>
       
      </form> 
  </div>
  )



}

export default ContactUs
import React from "react"
import './Contact.css' 

function Contact(props) {
  return (
    <div className="container">
      <div className="header">
        <h1>Contact</h1>
      </div>

      <div className="contact-links">
        <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/nicorithner/"><img src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" alt="linkedin logo" /></a>
        <a href="mailto:nicorithner@gmail.com?subject=Hello%20Ileri,%20From%20Github"><img src="https://img.shields.io/badge/gmail-%23D14836.svg?&style=for-the-badge&logo=gmail&logoColor=white" alt="gmail logo"/></a>
      </div>
    
    </div>
  )
}
 
export default Contact;

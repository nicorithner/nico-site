import React from "react"
import './Contact.css' 

function Contact(props) {
  return (
    <div className="container">
      <div className="header">
        <h1>Contact</h1>
      </div>

      <p>nicorithner@gmail.com</p>

      <div className="contact-links">
        <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/nicorithner/"><img src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" alt="linkedin logo" /></a>
        <a className="github" rel="noreferrer" target="_blank" href={props.github}><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="linkedin logo" /></a>
      </div>
    
    </div>
  )
}
 
export default Contact;

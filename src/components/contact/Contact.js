import React from "react"
import './Contact.css' 

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-links">
        <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/nicorithner/"><img src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" alt="linkedin logo" /></a>
        <a className="github" rel="noreferrer" target="_blank" href="https://www.github.com/nicorithner"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="github logo" /></a>
        <a className="gmail" href="mailto:nicorithner@gmail.com?subject=Message%20From%20my%20Portfolio"><img src="https://img.shields.io/badge/gmail-%23D14836.svg?&style=for-the-badge&logo=gmail&logoColor=white" alt="gmail logo" /></a>
      </div>
    </div>
  )
}
 
export default Contact;

import "./Footer.css"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

export default function Footer(){

return(

<footer className="footer">

  <div className="container footer-wrapper">

    <div className="footer-left">
      <h3>Toluwa</h3>
      <p>Full-Stack Developer</p>
    </div>

    <div className="footer-links">
      <a href="#home">Home</a>
      <a href="#services">Services</a>
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </div>

    <div className="footer-socials">
      <a href="https://github.com/TOLZX" target="_blank" rel="noreferrer" aria-label="GitHub">
        <FaGithub size={16}/> GitHub
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
        <FaLinkedin size={16}/> LinkedIn
      </a>
      <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
        <FaTwitter size={16}/> Twitter
      </a>
    </div>

  </div>

  <div className="footer-bottom">
    <p>© 2026 Toluwa. All rights reserved.</p>
  </div>

</footer>

)

}

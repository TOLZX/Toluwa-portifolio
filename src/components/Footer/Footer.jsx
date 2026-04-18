import "./Footer.css"
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaNodeJs, FaTwitch } from "react-icons/fa"
import { SiJavascript, SiMongodb } from "react-icons/si"

export default function Footer(){

return(

<footer className="footer">

<div className="container footer-wrapper">

<div className="footer-left">

<h3>Toluwa</h3>
<p>Frontend Developer</p>

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

<span><FaGitAlt size={16}/> GitHub</span>
<span> LinkedIn</span>
<span> Twitter</span>

</div>

</div>

<div className="footer-bottom">

<p>© 2026 Toluwa. All rights reserved.</p>

</div>

</footer>

)

}
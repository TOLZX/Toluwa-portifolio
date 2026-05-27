import { useState, useEffect } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import "./Navbar.css"

export default function Navbar(){

const [menuOpen, setMenuOpen] = useState(false)
const [scrolled, setScrolled] = useState(false)

useEffect(()=>{
  const onScroll = () => setScrolled(window.scrollY > 50)
  window.addEventListener("scroll", onScroll)
  return () => window.removeEventListener("scroll", onScroll)
},[])

return(

<nav className={`navbar${scrolled ? " scrolled" : ""}`}>

<div className="container nav-wrapper">

<div className="logo">TP</div>

<div
  className="menu-icon"
  onClick={()=>setMenuOpen(!menuOpen)}
  aria-label="Toggle menu"
>
  {menuOpen ? <FaTimes size={20}/> : <FaBars size={20}/>}
</div>

<ul className={menuOpen ? "nav-links active" : "nav-links"}>

  <li><a href="#home" onClick={()=>setMenuOpen(false)}>Home</a></li>
  <li><a href="#services" onClick={()=>setMenuOpen(false)}>Services</a></li>
  <li><a href="#about" onClick={()=>setMenuOpen(false)}>About</a></li>
  <li><a href="#skills" onClick={()=>setMenuOpen(false)}>Skills</a></li>
  <li><a href="#projects" onClick={()=>setMenuOpen(false)}>Projects</a></li>
  <li><a href="#contact" onClick={()=>setMenuOpen(false)}>Contact</a></li>

</ul>

<a
  className="talk-btn"
  href="https://calendly.com/toluwaowolaja/meeting"
  target="_blank"
  rel="noreferrer"
>
  Let's Talk
</a>

</div>

</nav>

)

}

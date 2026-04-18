import { useState } from "react"
import { useEffect } from "react"
import "./Navbar.css"

export default function Navbar(){

const [menuOpen, setMenuOpen] = useState(false)
const [theme,setTheme] = useState("dark")

useEffect(()=>{
document.body.className = theme
},[theme])

return(

<nav className="navbar">

<div className="container nav-wrapper">

<div className="logo">
TP
</div>

<div
className="menu-icon"
onClick={()=>setMenuOpen(!menuOpen)}
>
☰
</div>

<ul className={menuOpen ? "nav-links active" : "nav-links"}>

<li>
<a href="#home">Home</a>
</li>

<li>
<a href="#services">Services</a>
</li>

<li>
<a href="#about">About</a>
</li>

<li>
<a href="#skills">Skills</a>
</li>

<li>
<a href="#projects">Projects</a>
</li>

<li>
<a href="#contact">Contact</a>
</li>

</ul>

<button className="talk-btn" href="https://calendly.com/toluwaowolaja/meeting" target="_blank">
Let's Talk
</button>

</div>

</nav>


)

}
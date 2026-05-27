import "./Hero.css"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { openWhatsApp } from "../../../utils/whatsapp"

export default function Hero(){

return(

<section className="hero" id="home">

<div className="hero-bg-glow"></div>

<div className="container hero-wrapper">

  <div className="hero-left">

    <p className="intro">Hi, I'm</p>

    <h1>Toluwa</h1>

    <h2 className="hero-role">
      Full-Stack Developer
    </h2>

    <p className="hero-desc">
      I build modern web applications from front-end interfaces
      to back-end systems. My focus is creating fast,
      scalable and user-friendly digital products.
    </p>

    <div className="hero-actions">
      <button
        className="cv-btn"
        onClick={()=>openWhatsApp("hire")}
      >
        Hire Me
      </button>

      <a
        href="#projects"
        className="cv-btn cv-btn--ghost"
      >
        View Work
      </a>
    </div>

    <div className="socials">
      <a
        href="https://github.com/TOLZX"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
        className="social-link"
      >
        <FaGithub size={20}/>
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
        className="social-link"
      >
        <FaLinkedin size={20}/>
      </a>
    </div>

  </div>

  <div className="hero-right">
    <div className="hero-img-wrapper">
      <img src="/anime.png" alt="Toluwa — Full-Stack Developer"/>
    </div>
  </div>

</div>

</section>

)

}

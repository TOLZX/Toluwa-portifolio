import "./Hero.css"
import { openWhatsApp } from "../../../utils/whatsapp"

export default function Hero(){

return(

<section className="hero" id="home">

<div className="container hero-wrapper">

<div className="hero-left">

<p className="intro">
Hi, I'm
</p>

<h1>
Toluwa
</h1>

<h2 className="hero-role">
Full-Stack Developer
</h2>

<p className="hero-desc">
I build modern web applications from front-end interfaces
to back-end systems. My focus is creating fast,
scalable and user-friendly digital products.
</p>

<button
className="cv-btn"
onClick={()=>openWhatsApp("hire")}
>
Hire Me
</button>

<div className="socials">
<span>Git</span>
<span>In</span>
</div>

</div>

<div className="hero-right">

<img
src="/anime.png"
alt="developer"
/>

</div>

</div>

</section>

)

}


// import "./Hero.css"

// export default function Hero(){

// return(

// <section className="hero">

// <div className="container hero-wrapper">

// <div className="hero-left">

// <p className="intro">
// I am Toluwa
// </p>

// <h1>
// Front-End <br/>
// Developer & Designer
// </h1>

// <p className="hero-desc">
// Blending thoughtful UI design with clean, responsive development
// to create websites that look great and perform smoothly.
// </p>

// <button className="cv-btn">
// Download CV
// </button>

// <div className="socials">

// <span>in</span>
// <span>gh</span>

// </div>

// </div>

// <div className="hero-right">

// <img src="/anime.png" alt="developer"/>

// </div>

// </div>

// </section>

// )

// }
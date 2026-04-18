import "./Services.css"
import { motion } from "framer-motion"
import { openWhatsApp } from "../../../utils/whatsapp"

export default function Services(){

return(

<motion.section
className="services"
id="services"
initial={{opacity:0, y:50}}
whileInView={{opacity:1, y:0}}
transition={{duration:0.6}}
viewport={{once:true}}
>

<section className="services" id="services">

<div className="container">

<h2 className="section-title">
Services
</h2>

<div className="services-grid">

<div className="service-card">
<h3>UI/UX Website Design</h3>
<p>
Clean and modern interface design focused on usability and visual clarity.
</p>

<div className="tags">
<span>Wireframes</span>
<span>Layouts</span>
<span>User Flow</span>
</div>
</div>

<div className="service-card">
<h3>Frontend Development</h3>
<p>
Building responsive websites using modern HTML, CSS and JavaScript.
</p>

<div className="tags">
<span>HTML</span>
<span>CSS</span>
<span>React</span>
</div>
</div>

<div className="service-card">
<h3>Performance & Optimization</h3>
<p>
Improving speed, accessibility and responsiveness across devices.
</p>

<div className="tags">
<span>SEO</span>
<span>Speed</span>
<span>Optimization</span>
</div>
</div>

<div className="service-card">
<h3>Website Deployment</h3>
<p>
Launching and maintaining websites with reliable hosting platforms.
</p>

<div className="tags">
<span>Netlify</span>
<span>Vercel</span>
<span>Git</span>
</div>
</div>

</div>

</div>
</section>

{/* <button onClick={()=>openWhatsApp("hire")}>
Hire Me
</button>

<button onClick={()=>openWhatsApp("question")}>
Ask Question
</button> */}
</motion.section>

)

}
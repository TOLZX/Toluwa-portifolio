import "./Projects.css"
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaNodeJs } from "react-icons/fa"
import { SiJavascript, SiMongodb } from "react-icons/si"
import { useState } from "react"
import { motion } from "framer-motion"

export default function Projects(){

return(

<motion.section
className="services"
id="services"
initial={{opacity:0, y:50}}
whileInView={{opacity:1, y:0}}
transition={{duration:0.6}}
viewport={{once:true}}
>
<section className="projects" id="projects">

<div className="container">

<h2 className="section-title">
Projects
</h2>

<div className="projects-grid">

<div className="project-card">

<img src="/cartify.png" alt="project"/>

<div className="project-content">

<h3>Business Landing Page</h3>

<p>
Modern responsive landing page designed for startups and small businesses.
</p>

<div className="project-tech">
<span>HTML</span>
<span>CSS</span>
<span>React</span>
</div>

<div className="project-links">
<a href="#">Live</a>
<a href="#">GitHub</a>
</div>

</div>

</div>


<div className="project-card">

<img src="/grocerystore.png" alt="project"/>

<div className="project-content">

<h3>E-Commerce UI</h3>

<p>
Clean shopping interface with product display and responsive layout.
</p>

<div className="project-tech">
<span>React</span>
<span>CSS</span>
<span>API</span>
</div>

<div className="project-links">
<a href="#">Live</a>
<a href="#">GitHub</a>
</div>

</div>

</div>


<div className="project-card" id="projects">

<img src="/portfoliov2.png" alt="project"/>

<div className="project-content">

<h3>Developer Portfolio</h3>

<p>
Minimal developer portfolio built with modern UI layout principles.
</p>

<div className="project-tech">
<span>React</span>
<span>CSS</span>
<span>Vite</span>
</div>

<div className="project-links">
<a href="#">Live</a>
<a href="#">GitHub</a>
</div>

</div>

</div>
<div className="project-card" id="projects">

<img src="/animeweb.png" alt="project"/>

<div className="project-content">

<h3>Anime Streaming site</h3>

<p>
Minimal developer portfolio built with modern UI layout principles.
</p>

<div className="project-tech">
<span>React</span>
<span>CSS</span>
<span>Vite</span>
</div>

<div className="project-links">
<a href="#">Live</a>
<a href="#">GitHub</a>
</div>

</div>

</div>
<div className="project-card" id="projects">

<img src="/portfoliov1.png" alt="project"/>

<div className="project-content">

<h3>Developer Portfolio</h3>

<p>
Minimal developer portfolio built with modern UI layout principles.
</p>

<div className="project-tech">
<span>React</span>
<span>CSS</span>
<span>Vite</span>
</div>

<div className="project-links">
<a href="#">Live</a>
<a href="#">GitHub</a>
</div>

</div>

</div>
<div className="project-card" id="projects">

<img src="/sneakers.png" alt="project"/>

<div className="project-content">

<h3>Sneakers website</h3>

<p>
a small website built with react and css to display sneakers products.
</p>

<div className="project-tech">
<span>React</span>
<span>CSS</span>
<span>Vite</span>
</div>

<div className="project-links">
<a href="#">Live</a>
<a href="#">GitHub</a>
</div>

</div>

</div>

</div>

</div>

</section>
</motion.section>
)

}



// import "./Projects.css"
// import { useState } from "react"

// const projects = [

// {
// title:"Portfolio Website",
// type:"frontend",
// image:"/project1.png"
// },

// {
// title:"E-commerce App",
// type:"fullstack",
// image:"/project2.png"
// },

// {
// title:"Admin Dashboard",
// type:"frontend",
// image:"/project3.png"
// }

// ]

// export default function Projects(){

// const [filter,setFilter] = useState("all")

// const filteredProjects =
// filter === "all"
// ? projects
// : projects.filter(p => p.type === filter)

// return(

// <section className="projects" id="projects">

// <div className="container">

// <h2 className="section-title">Projects</h2>

// <div className="project-filter">

// <button onClick={()=>setFilter("all")}>All</button>
// <button onClick={()=>setFilter("frontend")}>Frontend</button>
// <button onClick={()=>setFilter("fullstack")}>Fullstack</button>

// </div>

// <div className="projects-grid">

// {filteredProjects.map((project,index)=>(
// <div className="project-card" key={index}>

// <img src={project.image}/>

// <h3>{project.title}</h3>

// </div>
// ))}

// </div>

// </div>

// </section>

// )

// }


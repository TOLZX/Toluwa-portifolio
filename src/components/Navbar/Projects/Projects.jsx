import "./Projects.css"

const projects = [
  {
    image: "/cartify.png",
    title: "Business Landing Page",
    desc: "Modern responsive landing page designed for startups and small businesses.",
    tech: ["HTML", "CSS", "React"],
    live: "#",
    github: "#"
  },
  {
    image: "/grocerystore.png",
    title: "E-Commerce UI",
    desc: "Clean shopping interface with product display and responsive layout.",
    tech: ["React", "CSS", "API"],
    live: "#",
    github: "#"
  },
  {
    image: "/portfoliov2.png",
    title: "Developer Portfolio v2",
    desc: "Minimal developer portfolio built with modern UI layout principles.",
    tech: ["React", "CSS", "Vite"],
    live: "#",
    github: "#"
  },
  {
    image: "/animeweb.png",
    title: "Anime Streaming Site",
    desc: "A streaming site UI with dynamic content browsing and category filters.",
    tech: ["React", "CSS", "Vite"],
    live: "#",
    github: "#"
  },
  {
    image: "/portfoliov1.png",
    title: "Developer Portfolio v1",
    desc: "First-generation personal portfolio showcasing frontend skills.",
    tech: ["React", "CSS", "Vite"],
    live: "#",
    github: "#"
  },
  {
    image: "/sneakers.png",
    title: "Sneakers Website",
    desc: "A product display site built with React and CSS to showcase sneaker collections.",
    tech: ["React", "CSS", "Vite"],
    live: "#",
    github: "#"
  }
]

export default function Projects(){

return(

<section className="projects" id="projects">

  <div className="container">

    <p className="section-label">My Work</p>
    <h2 className="section-title">Projects</h2>
    <p className="section-subtitle">
      A selection of things I've designed and built.
    </p>

    <div className="projects-grid">

      {projects.map((p, i) => (
        <div className="project-card" key={i}>

          <div className="project-img-wrap">
            <img src={p.image} alt={p.title}/>
          </div>

          <div className="project-content">

            <h3>{p.title}</h3>
            <p>{p.desc}</p>

            <div className="project-tech">
              {p.tech.map((t,j)=><span key={j}>{t}</span>)}
            </div>

            <div className="project-links">
              <a href={p.live}>Live ↗</a>
              <a href={p.github}>GitHub ↗</a>
            </div>

          </div>

        </div>
      ))}

    </div>

  </div>

</section>

)

}

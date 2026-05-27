import "./TechStack.css"
import { FaReact, FaNodeJs, FaGitAlt, FaHtml5, FaCss3Alt, FaPhp, FaBootstrap } from "react-icons/fa"
import { SiJavascript, SiMongodb, SiExpress, SiTailwindcss } from "react-icons/si"

const stack = [
    { icon: <FaHtml5/>,        name: "HTML",       color: "#e34c26" },
    { icon: <FaCss3Alt/>,      name: "CSS",        color: "#264de4" },
    { icon: <SiJavascript/>,   name: "JavaScript", color: "#f0db4f" },
    { icon: <FaReact/>,        name: "React",      color: "#61dbfb" },
    { icon: <FaPhp/>,          name: "PHP",        color: "#8892be" },
    { icon: <FaBootstrap/>,    name: "Bootstrap",  color: "#7952b3" },
    { icon: <FaNodeJs/>,       name: "Node.js",    color: "#6cc24a" },
    { icon: <SiExpress/>,      name: "Express",    color: "#aaaaaa" },
    { icon: <SiMongodb/>,      name: "MongoDB",    color: "#4db33d" },
    { icon: <FaGitAlt/>,       name: "Git",        color: "#f05032" },
    { icon: <SiTailwindcss/>,  name: "Tailwind",   color: "#38bdf8" },
]

export default function TechStack(){

return(

<section className="tech" id="tech">

  <div className="container">

    <p className="section-label">Technologies</p>
    <h2 className="section-title">Tech Stack</h2>
    <p className="section-subtitle">
      Tools and technologies I work with daily.
    </p>

    <div className="tech-grid">

      {stack.map((item, index) => (
        <div className="tech-card" key={index}>
          <div className="icon" style={{color: item.color}}>{item.icon}</div>
          <p>{item.name}</p>
        </div>
      ))}

    </div>

  </div>

</section>

)

}

import "./Skills.css"
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaNodeJs, FaPhp, FaBootstrap } from "react-icons/fa"
import { SiJavascript, SiMongodb } from "react-icons/si"

const skills = [
  { icon: <FaHtml5/>, name: "HTML", desc: "Semantic structure and accessible markup.", color: "#e34c26" },
  { icon: <FaCss3Alt/>, name: "CSS", desc: "Responsive layouts, flexbox, and grid.", color: "#264de4" },
  { icon: <SiJavascript/>, name: "JavaScript", desc: "Interactive web functionality and logic.", color: "#f0db4f" },
  { icon: <FaReact/>, name: "React", desc: "Component-based modern frontend development.", color: "#61dbfb" },
  { icon: <FaGitAlt/>, name: "Git", desc: "Version control and project collaboration.", color: "#f05032" },
  { icon: <SiMongodb/>, name: "MongoDB", desc: "NoSQL database for document-oriented storage.", color: "#4db33d" },
  { icon: <FaNodeJs/>, name: "Node.js", desc: "Server-side JavaScript runtime environment.", color: "#6cc24a" },
  { icon: <FaPhp/>, name: "PHP", desc: "Server-side scripting language.", color: "#8892be" },
  { icon: <FaBootstrap/>, name: "Bootstrap", desc: "CSS framework for responsive design.", color: "#7952b3" },
]

export default function Skills(){

return(

<section className="skills" id="skills">

  <div className="container">

    <p className="section-label">My Toolkit</p>
    <h2 className="section-title">Skills</h2>
    <p className="section-subtitle">
      Technologies I use to build modern web experiences.
    </p>

    <div className="skills-grid">

      {skills.map((s, i) => (
        <div className="skill-card" key={i}>
          <div className="skill-icon" style={{color: s.color}}>{s.icon}</div>
          <h3>{s.name}</h3>
          <p>{s.desc}</p>
        </div>
      ))}

    </div>

  </div>

</section>

)

}

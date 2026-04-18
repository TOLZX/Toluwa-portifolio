import "./TechStack.css"
import {FaReact, FaNodeJs, FaGitAlt, FaHtml5, FaCss3Alt, FaPhp, FaBootstrap} from "react-icons/fa"
import {SiJavascript, SiMongodb, SiExpress, SiTailwindcss} from "react-icons/si"

const stack = [
    { icon: <FaHtml5/>, name: "HTML" },
    { icon: <FaCss3Alt/>, name: "CSS" },
    { icon: <SiJavascript/>, name: "JavaScript" },
    { icon: <FaReact/>, name: "React" },
    { icon: <FaPhp/>, name: "PHP" },
    { icon: <FaBootstrap/>, name: "Bootstrap" },
    { icon: <FaNodeJs/>, name: "Node.js" },
    { icon: <SiExpress/>, name: "Express" },
    { icon: <SiMongodb/>, name: "MongoDB" },
    { icon: <FaGitAlt/>, name: "Git" },
    { icon: <SiTailwindcss/>, name: "Tailwind" },
]

export default function TechStack(){

return(

<section className="tech" id="tech">

<div className="container">

<h2 className="section-title">Tech Stack</h2>

<div className="tech-grid">

{stack.map((item,index)=>(
<div className="tech-card" key={index}>
<div className="icon">{item.icon}</div>
<p>{item.name}</p>
</div>
))}

</div>

</div>

</section>

)

}
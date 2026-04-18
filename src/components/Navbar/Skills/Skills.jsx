import "./Skills.css"
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaNodeJs, FaPhp, FaBootstrap } from "react-icons/fa"
import { SiJavascript, SiMongodb } from "react-icons/si"

export default function Skills(){

return(

<section className="skills" id="skills">

<div className="container">

<h2 className="section-title">
Skills
</h2>

<div className="skills-grid">

<div className="skill-card">
<FaHtml5 size={35}/>
<h3>HTML</h3>
<p>Semantic structure and accessible markup.</p>
</div>

<div className="skill-card">
<FaCss3Alt size={35}/>
<h3>CSS</h3>
<p>Responsive layouts, flexbox, and grid.</p>
</div>

<div className="skill-card">
<SiJavascript size={35}/>
<h3>JavaScript</h3>
<p>Interactive web functionality and logic.</p>
</div>

<div className="skill-card">
<FaReact size={35}/>
<h3>React</h3>
<p>Component-based modern frontend development.</p>
</div>

<div className="skill-card">
<FaGitAlt size={35}/>
<h3>Git</h3>
<p>Version control and project collaboration.</p>
</div>

<div className="skill-card">
<SiMongodb size={35}/>
<h3>MongoDB</h3>
<p>NoSQL database for document-oriented storage.</p>
</div>

<div className="skill-card">
<FaNodeJs size={35}/>
<h3>Node.js</h3>
<p>Server-side JavaScript runtime environment.</p>
</div>

<div className="skill-card">
    <FaPhp size={35}/>
<h3>php</h3>
<p>Server-side scripting language.</p>
</div>

<div className="skill-card">
<FaBootstrap size={35}/>
<h3>Bootstrap</h3>
<p>Front-end CSS framework for responsive design.</p>
</div>

{/* <div className="skill-card">
    <FaExpress size={35}/>
    <h3>Express</h3>
    <p>Web application framework for Node.js.</p>
</div> */}


</div>

</div>

</section>

)

}
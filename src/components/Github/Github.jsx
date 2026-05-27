import "./Github.css"
import { FaGithub } from "react-icons/fa"

export default function Github(){

return(

<section className="github">

  <div className="container">

    <p className="section-label">Open Source</p>
    <h2 className="section-title">GitHub Activity</h2>
    <p className="section-subtitle">
      View my projects, commits, and contributions on GitHub.
    </p>

    <a
      href="https://github.com/TOLZX"
      target="_blank"
      rel="noreferrer"
      className="github-btn"
    >
      <FaGithub size={18}/> Visit GitHub
    </a>

  </div>

</section>

)

}

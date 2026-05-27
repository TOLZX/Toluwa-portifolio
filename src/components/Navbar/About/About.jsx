import "./About.css"

export default function About(){

return(

<section className="about" id="about">

  <div className="container about-wrapper">

    <div className="about-image">
      <div className="about-img-frame">
        <img src="/anime.png" alt="Toluwa"/>
      </div>
    </div>

    <div className="about-content">

      <p className="section-label">Who I Am</p>
      <h2 className="section-title">About Me</h2>

      <p>
        I am a full-stack developer focused on building clean,
        responsive and user-friendly websites. I enjoy transforming
        design concepts into interactive web experiences that
        perform well across all devices.
      </p>

      <p>
        My work combines strong UI structure with efficient
        code to deliver modern web interfaces that help
        businesses present their products and services clearly.
      </p>

      <div className="about-stats">

        <div className="stat">
          <h3>10+</h3>
          <p>Projects Built</p>
        </div>

        <div className="stat">
          <h3>3+</h3>
          <p>Years Learning</p>
        </div>

        <div className="stat">
          <h3>5+</h3>
          <p>Clients</p>
        </div>

      </div>

    </div>

  </div>

</section>

)

}

import "./Services.css"
import { motion } from "framer-motion"
import { FaPaintBrush, FaCode, FaRocket, FaServer } from "react-icons/fa"

const services = [
  {
    icon: <FaPaintBrush size={28}/>,
    title: "UI/UX Website Design",
    desc: "Clean and modern interface design focused on usability and visual clarity.",
    tags: ["Wireframes", "Layouts", "User Flow"]
  },
  {
    icon: <FaCode size={28}/>,
    title: "Frontend Development",
    desc: "Building responsive websites using modern HTML, CSS and JavaScript.",
    tags: ["HTML", "CSS", "React"]
  },
  {
    icon: <FaRocket size={28}/>,
    title: "Performance & Optimization",
    desc: "Improving speed, accessibility and responsiveness across all devices.",
    tags: ["SEO", "Speed", "Optimization"]
  },
  {
    icon: <FaServer size={28}/>,
    title: "Website Deployment",
    desc: "Launching and maintaining websites with reliable hosting platforms.",
    tags: ["Netlify", "Vercel", "Git"]
  }
]

const cardVariants = {
  hidden:{ opacity:0, y:40 },
  visible:(i)=>({ opacity:1, y:0, transition:{ delay: i * 0.1, duration: 0.5 } })
}

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

  <div className="container">

    <p className="section-label">What I Offer</p>
    <h2 className="section-title">Services</h2>
    <p className="section-subtitle">
      End-to-end web development from design to deployment.
    </p>

    <div className="services-grid">

      {services.map((s, i) => (
        <motion.div
          className="service-card"
          key={i}
          custom={i}
          initial="hidden"
          whileInView="visible"
          variants={cardVariants}
          viewport={{once:true}}
        >
          <div className="service-icon">{s.icon}</div>
          <h3>{s.title}</h3>
          <p>{s.desc}</p>
          <div className="tags">
            {s.tags.map((t,j)=><span key={j}>{t}</span>)}
          </div>
        </motion.div>
      ))}

    </div>

  </div>

</motion.section>

)

}

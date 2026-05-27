import "./Pricing.css"
import { openWhatsApp } from "../../utils/whatsapp"

const plans = [
  {
    name: "Basic",
    price: "$100",
    desc: "Perfect for simple landing pages.",
    features: ["1 Page Website", "Responsive Design", "Basic SEO"],
    popular: false
  },
  {
    name: "Standard",
    price: "$300",
    desc: "Great for small businesses.",
    features: ["Multi-page Website", "Modern UI Design", "Performance Optimization"],
    popular: true
  },
  {
    name: "Premium",
    price: "$700+",
    desc: "Full-featured web applications.",
    features: ["Full-stack App", "API Integration", "Custom Features"],
    popular: false
  }
]

export default function Pricing(){

return(

<section className="pricing" id="pricing">

  <div className="container">

    <p className="section-label">Transparent Rates</p>
    <h2 className="section-title">Pricing</h2>
    <p className="section-subtitle">
      Simple, clear pricing — no hidden fees.
    </p>

    <div className="pricing-grid">

      {plans.map((plan, i) => (
        <div className={`price-card${plan.popular ? " popular" : ""}`} key={i}>

          {plan.popular && (
            <div className="popular-badge">Most Popular</div>
          )}

          <h3>{plan.name}</h3>
          <p className="plan-desc">{plan.desc}</p>
          <p className="price">{plan.price}</p>

          <ul>
            {plan.features.map((f, j) => (
              <li key={j}><span className="check">✓</span>{f}</li>
            ))}
          </ul>

          <button onClick={()=>openWhatsApp("hire")}>
            Get Started
          </button>

        </div>
      ))}

    </div>

  </div>

</section>

)

}
